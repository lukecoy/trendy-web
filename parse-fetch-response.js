// Helper function to properly throw response error codes
// (see here https://github.com/github/fetch#caveats)
// and return parsed JSON
window.parseFetchResponse = function(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
