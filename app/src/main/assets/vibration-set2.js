document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('click', getTouchXY, false);

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
        if ( xDiff > 0 ) {
            /* right swipe */
            console.log(xDiff);
        } else {
            /* left swipe */
            console.log(xDiff);
        }
    } else {
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

function like2() {
  navigator.vibrate([200, 100, 300]);
}

function angry2() {
navigator.vibrate([150, 30, 1200, 500, 150, 30, 1200]);
}

function love2() {
  navigator.vibrate([50, 200, 230, 300, 50, 200, 230, 300, 50, 200, 230]);

}

function haha2() {
  navigator.vibrate([150, 50, 150, 50, 150, 50, 150, 50, 150, 50, 150, 50, 150, 50, 150, 50, 150, 50, 150]);
}

function yay2() {
// For a single value you can pass in a Number rather than an Array
navigator.vibrate([150, 50, 150, 50, 150, 50, 800]);
}

function sad2() {
  navigator.vibrate([200, 400, 200, 400, 200, 400, 70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70]);
}

function stopVibrations2() {
  navigator.vibrate(0);
}