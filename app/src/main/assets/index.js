document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('click', getTouchXY, false);

var num_taps = 0

function getTouchXY(evt) {
    num_taps++;
    console.log(num_taps);
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
        if ( xDiff > 10) {
            /* right swipe */
            console.log("positive X: ");
            console.log(xDiff);
        } else if (xDiff < -10){
            /* left swipe */
            console.log("negative X: ");
            console.log(xDiff);
        }
    } else {
        if ( yDiff > 10 ) {
            /* down swipe */
            console.log("positive Y: ");
            console.log(yDiff);
        } else if (yDiff < -10){
            /* up swipe */
            console.log("negative Y: ");
            console.log(yDiff);
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};