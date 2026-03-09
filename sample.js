const https = require('https');

function checkUrlStatus(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      // Any response, even a 404 or 500, indicates the server is online/reachable at the network level
      // A 200 status specifically means the resource is "OK"
      const isOnline = res.statusCode >= 200 && res.statusCode < 400; 
      console.log(`${url} Status Code: ${res.statusCode}`);
      resolve(isOnline);
      res.resume(); // Consume the response data to free up memory
    }).on('error', (e) => {
      // An 'error' event typically means a network issue (e.g., connection refused, DNS error, timeout)
      console.error(`Error checking ${url}: ${e.message}`);
      resolve(false);
    });
  });
}

// Usage with a specific link:
(async () => {
  const isGoogleOnline = await checkUrlStatus('https://www.google.com');
  console.log(`https://www.google.com is online: ${isGoogleOnline}`);

  const isInvalidOnline = await checkUrlStatus('https://www.fakeurl.notreal');
  console.log(`https://www.fakeurl.notreal is online: ${isInvalidOnline}`);
})();
