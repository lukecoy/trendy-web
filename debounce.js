// Basically a simplified _.debounce from underscore,
// which is good enough for our usecase
window.debounce = function(func, wait=700) {
  var timeout;

  return function() {
    window.clearTimeout(timeout);

    timeout = setTimeout(func.bind(null, ...arguments), wait);
  };
};
