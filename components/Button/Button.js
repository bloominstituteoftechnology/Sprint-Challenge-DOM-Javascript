

var hidden = false;

function actionOne() {
    hidden = !hidden;
   /*  if(hidden) {
        document.getElementById('button1').style.visibility = 'hidden';
    } else {
        document.getElementById('button1').style.visibility = 'visible';
    } */
    document.getElementById('button1').style.visibility == hidden ? document.getElementById('button1').style.visibility = 'hidden' : document.getElementById('button1').style.visibility = 'visible';
};
/* tried to do the above differently */

function actionTwo() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById('button2').style.visibility = 'hidden';
    } else {
        document.getElementById('button2').style.visibility = 'visible';
    }
};

function actionThr() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById('button3').style.visibility = 'hidden';
    } else {
        document.getElementById('button3').style.visibility = 'visible';
    }
};
