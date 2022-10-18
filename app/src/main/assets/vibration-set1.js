// Add a global error event listener early on in the page load, to help ensure that browsers
  // which don't support specific functionality still end up displaying a meaningful message.
  window.addEventListener('error', function(error) {
    if (ChromeSamples && ChromeSamples.setStatus) {
      console.error(error);
      ChromeSamples.setStatus(error.message + ' (Your browser may not support this feature.)');
      error.preventDefault();
    }
  });

function like() {
  // Vibrate for 500ms
  navigator.vibrate([150, 100, 100]);
}

function angry() {
// For a single value you can pass in a Number rather than an Array
navigator.vibrate(1000);
}

function love() {
  // For a single value you can pass in a Number rather than an Array
  navigator.vibrate([50, 200, 80, 700, 50, 200, 80, 700, 50, 200, 80]);
}

function haha() {
// For a single value you can pass in a Number rather than an Array
navigator.vibrate([100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100]);
}

function yay() {
// For a single value you can pass in a Number rather than an Array
navigator.vibrate([200, 120, 80, 80, 500]);
}

function sad() {
  // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
  // indices specify pauses.
  // Vibrate for 500ms 6 times, pausing for 250ms in between each one.
  navigator.vibrate([200, 400, 200, 400, 200, 400, 1000]);
}

function stopVibrations() {
  // You can also stop an ongoing vibration pattern by specifying a vibration
  // length of zero.
  navigator.vibrate(0);
}

/* jshint ignore:start */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53563471-1', 'auto');
ga('send', 'pageview');
/* jshint ignore:end */