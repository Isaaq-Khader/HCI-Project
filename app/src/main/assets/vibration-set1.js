//// Add a global error event listener early on in the page load, to help ensure that browsers
//  // which don't support specific functionality still end up displaying a meaningful message.
//  window.addEventListener('error', function(error) {
//    if (ChromeSamples && ChromeSamples.setStatus) {
//      console.error(error);
//      ChromeSamples.setStatus(error.message + ' (Your browser may not support this feature.)');
//      error.preventDefault();
//    }
//  });
//
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('click', getTouchXY, false);

var input_happened = false;

var num_taps = 0

function getTouchXY(evt) {
    num_taps++;
    console.log(num_taps);
    input_happened = true;
    //reset num taps at the end of each user tracked event
}

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/

        input_happened = true;

        if ( xDiff > 0 ) {
            /* right swipe */
            console.log(xDiff);
        } else {
            /* left swipe */
            console.log(xDiff);
        }
    } else {

        input_happened = true;

        if ( yDiff > 0 ) {
            /* down swipe */
            console.log(yDiff);
        } else {
            /* up swipe */
            console.log(yDiff);
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

function like() {
    navigator.vibrate([150, 100, 100]);
    console.log("playing like");
}

function angry() {
    navigator.vibrate(1000);
    console.log("playing angry");
}

function love() {
    navigator.vibrate([50, 200, 80, 700, 50, 200, 80, 700, 50, 200, 80]);
    console.log("playing love");
}

function haha() {
    navigator.vibrate([100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100]);
    console.log("playing heheheha");

}

function yay() {
    navigator.vibrate([200, 120, 80, 80, 500]);
    console.log("playing yay");
}

function sad() {
    navigator.vibrate([200, 400, 200, 400, 200, 400, 1000]);
    console.log("playing sad");
}

function stopVibrations() {
    navigator.vibrate(0);
}

// sourced from
// https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

function runVibration(i)
{
    if(i == 0)
    {
        like();
    }
    if(i == 1)
    {
        love();
    }
    if(i == 2)
    {
        angry();
    }
    if(i == 3)
    {
        haha();
    }
    if(i == 4)
    {
        yay();
    }
    if(i == 5)
    {
        sad();
    }
}

// sourced from
// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

async function run_test()
{
    var randomArr = shuffle([0, 1, 2, 3, 4, 5]);
    for(let i = 0; i < randomArr.length - 1; i++)
    {
        input_happened = false;
        runVibration(randomArr[i]);
        console.log("after vibration");
//        await new Promise(r => setTimeout(r, 10000));
        console.log("after waiting");
        while(true){
            console.log("inside loop");
            if (input_happened) {break;}
            await new Promise(r => setTimeout(r, 1000));
        }
        //const input = prompt();

        // accept user input
        // store user input
    }
    console.log("test finished");
}

///* jshint ignore:start */
//(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
//ga('create', 'UA-53563471-1', 'auto');
//ga('send', 'pageview');
///* jshint ignore:end */