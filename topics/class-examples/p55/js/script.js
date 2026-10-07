/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let mouseTriggerBall = {
    x: 200,
    y: 200,
    size: 50

}


function setup() {
    createCanvas(500, 500);
    background(0);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    if (mouseIsPressed) {
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(mouseX, mouseY, mouseTriggerBall.size);
    }

}

function mousePressed() {
    console.log(mouseX, mouseY);
}
