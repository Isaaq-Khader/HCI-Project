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
var num_taps = 0;
var left_swipe_happened = false;
var right_swipe_happened = false;
var up_swipe_happened = false;
var down_swipe_happened = false;

function getTouchXY(evt) {
    num_taps++;
    console.log('Taps: ' + num_taps);
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
            /* right swipe (we inverted) */
            left_swipe_happened = true;
            console.log('Left Swipe: ' + xDiff);
        } else {
            /* left swipe (we inverted) */
            right_swipe_happened = true;
            console.log('Right Swipe: ' + xDiff);
        }
    } else {

        input_happened = true;

        if ( yDiff > 0 ) {
            /* down swipe (we inverted) */
            up_swipe_happened = true;
            console.log('Up Swipe: ' + yDiff);
        } else {
            /* up swipe (we inverted) */
            down_swipe_happened = true;
            console.log('Down Swipe: ' + yDiff);
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
  navigator.vibrate([150, 50, 150, 50, 150, 50, 800]);
}

function sad2() {
  navigator.vibrate([200, 400, 200, 400, 200, 400, 70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70,10,70]);
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
        like2();
    }
    if(i == 1)
    {
        love2();
    }
    if(i == 2)
    {
        angry2();
    }
    if(i == 3)
    {
        haha2();
    }
    if(i == 4)
    {
        yay2();
    }
    if(i == 5)
    {
        sad2();
    }
}

async function run_test()
{
    var randomArr = shuffle([0, 1, 2, 3, 4, 5]);
    for(let i = 0; i < randomArr.length - 1; i++)
    {
        console.log("Trial: " + i);

        // Randomize vibration order, then wait for vibration
        runVibration(randomArr[i]);
        await new Promise(r => setTimeout(r, 2000));

        // Reset events
        num_taps = 0;
        left_swipe_happened = false;
        right_swipe_happened = false;
        up_swipe_happened = false;
        down_swipe_happened = false;

        // Wait for user to give emoji
        input_happened = false;
        while(true){
            //console.log("inside loop");
            if (input_happened) {break;}
            await new Promise(r => setTimeout(r, 500));
        }
        await new Promise(r => setTimeout(r, 2500));

        // Interpret user's sent emoji
        if (num_taps > 0) {
            if (up_swipe_happened) {
                console.log("Yay Emoji Sent");
            }
            else if (down_swipe_happened) {
                console.log("Sad Emoji Sent");
            }
        }
        else if (left_swipe_happened) {
            console.log("Like Emoji Sent");
        }
        else if (right_swipe_happened) {
            console.log("Love Emoji Sent");
        }
        else if (up_swipe_happened) {
            console.log("Haha Emoji Sent");
        }
        else if (down_swipe_happened) {
            console.log("Angry Emoji Sent");
        }
        else {
            console.log("Couldn't Define Emoji");
        }

        // Have user tap one more time for the next vibration
        input_happened = false;
        while(true){
            //console.log("inside loop");
             if (input_happened) {break;}
             await new Promise(r => setTimeout(r, 500));
        }
    }
    console.log("Test Finished!");
}

///* jshint ignore:start */
//(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
//ga('create', 'UA-53563471-1', 'auto');
//ga('send', 'pageview');
///* jshint ignore:end */