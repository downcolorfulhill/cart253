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
    size: 50,
    speed: 0,
    fillColor: {
        r: 100,
        g: 0,
        b: 225
    }

}


function setup() {
    createCanvas(500, 500);
    background(0);
    setTimeout(changeBallColorToWhite, 5000);
    setInterval(changeBallColor, 2000)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    fill(mouseTriggerBall.fillColor.r, mouseTriggerBall.fillColor.g, mouseTriggerBall.fillColor.b);
    ellipse(mouseTriggerBall.x, mouseTriggerBall.y, mouseTriggerBall.size);

    moveBall();

}

function changeBallColor() {
    mouseTriggerBall.fillColor.r = random(255);
    mouseTriggerBall.fillColor.g = random(255);
    mouseTriggerBall.fillColor.b = random(255);
}

function moveBall() {
    mouseTriggerBall.x =
        mouseTriggerBall.x + mouseTriggerBall.speed;
}

// function keyPressed(event) {
//     console.log(event.key);
//     if (event.key === 'r') {
//         mouseTriggerBall.speed = 2;
//     }
//     if (event.key === 's') {
//         mouseTriggerBall.fillColor.r = 255;

//     }


// }
// function keyReleased() {
//     mouseTriggerBall.speed = 0;
// }
// function keyTyped() {

// }



// function mousePressed(){
// console.log(mouseX, mouseY)
//     fill(random(0, 255), random(0, 255), random(0, 255));
// ellipse(mouseX, mouseY, mouseTriggerBall.size);

// }


// function mousePressed() {
//     mouseTriggerBall.speed = 2;
// }
// function mouseReleased() {
//     mouseTriggerBall.speed = 0;
// }

// function mouseWheel() {
//     mouseTriggerBall.size = constrain(mouseTriggerBall.size,5,200 )
//     mouseTriggerBall.size = mouseTriggerBall.size - 5;
// }

// function mouseWheel(event) {
//     //console.log(event.deltaY)
//     // mouseTriggerBall.size = constrain(mouseTriggerBall.size, 5, 200)
//     mouseTriggerBall.size = mouseTriggerBall.size - event.deltaY;
// }

// function mouseMoved() {
//     mouseTriggerBall.x = mouseX;
// }