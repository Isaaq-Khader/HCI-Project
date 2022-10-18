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
    navigator.vibrate([150, 100, 100]);
}

function angry() {
    navigator.vibrate(1000);
}

function love() {
    navigator.vibrate([50, 200, 80, 700, 50, 200, 80, 700, 50, 200, 80]);
}

function haha() {
    navigator.vibrate([100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100]);
}

function yay() {
    navigator.vibrate([200, 120, 80, 80, 500]);
}

function sad() {
    navigator.vibrate([200, 400, 200, 400, 200, 400, 1000]);
}

function stopVibrations() {
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