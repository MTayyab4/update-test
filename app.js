// Check if service workers are supported by the browser
if ('serviceWorker' in navigator) {
  // Use an asynchronous function to register the service worker
  (async () => {
    try {
      // Register the service worker with the specified scope
      const registration = await navigator.serviceWorker.register('./sw.js', {
        scope: '/'
      });
      
      // Log the state of the service worker
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      // Log any errors that occur during registration
      console.error(`Service worker registration failed: ${error}`);
    }
  })();
}
