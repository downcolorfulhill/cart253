/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// let circleX = 250;
// let circleY = 250;

// let circle_X_2 = 220;
// let circle_Y_2 = 10;

let circleA = {
    circleX: 250,
    circleY: 250
}
let circleB = {
    circleX: 250,
    circleY: 10
}
let circleC = {
    circleX: 450,
    circleY: 250
}
let circleD = {
    circleX: 450,
    circleY: 10
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 600);
    background('skyblue');
    let newVal = squareNum(2)
    let newVal_2 = squareNum(5)
    console.log(newVal);
    console.log(newVal_2);

}


function changeY() {
    circleY = circleY - 1;
    console.log(circleY);
}

function squareNum(num) {
    let squaredNumValue = num * num;
    return squaredNumValue;


}

function calculateCloseness(objX, objY) {
    let d = dist(mouseX, mouseY, objX, objY);
    let mappedVal = map(d, 0, 250, 0, 255)
    return mappedVal;
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    // complexCircles();
    // complexCircles2();
    // complexCircles3();
    let newVal = calculateCloseness(circleA.circleX, circleA.circleY);
    // let newStroke = calculateCloseness(circleX, circleY);
    // console.log(newVal);


    complexCirclesP(circleA.circleX, circleA.circleY, 200, 400, newVal);
    changeY(circleA)
    complexCirclesP(circleB.circleX, circleB.circleY, 300, 200, newVal);
    changeY(circleB)

    complexCirclesP(circleC.circleX, circleC.circleY, 200, 400, newVal);
    changeY(circleC)
    complexCirclesP(circleD.circleX, circleD.circleY, 300, 200, newVal);
    changeY(circleD)
    // complexCirclesP(width / 2 - 100, height / 2, 100, 100);
}

function changeY(circleRef) {
    circleRef.circleY = circleRef.circleY + .3;




}


// function changeY(yVal) {
//     yVal = yVal + 1;
//     // console.log(circleY);
// }



function complexCirclesP(x, y, w, h, passedVal) {
    push();
    console.log(passedVal);
    fill(passedVal, 191, 0);
    ellipse(x, y, w, h);
    fill(5, 19, 230);
    ellipse(x, y, w - 40, h - 220);
    fill(1, 111, 3);
    ellipse(x, y, w - 80, h - 20);
    pop();
}

function complexCircles() {
    push();
    fill(255, 191, 0);
    ellipse(width / 2, height / 2, 80, 80);
    fill(5, 19, 230);
    ellipse(width / 2, height / 2, 60, 80);
    fill(1, 111, 3);
    ellipse(width / 2, height / 2, 40, 80);
    pop();
}
function complexCircles2() {
    push();
    fill(255, 191, 0);
    ellipse(width / 2 - 100, height / 2 - 200, 80, 80);
    fill(5, 19, 230);
    ellipse(width / 2 - 100, height / 2 - 100, 60, 80);
    fill(1, 111, 3);
    ellipse(width / 2 - 100, height / 2 - 100, 40, 80);
    pop();
}
function complexCircles3() {
    push();
    fill(255, 191, 0);
    ellipse(width / 2 - 200, height / 2 - 400, 80, 80);
    fill(5, 19, 230);
    ellipse(width / 2 - 200, height / 2 - 400, 60, 80);
    fill(1, 111, 3);
    ellipse(width / 2 - 200, height / 2 - 200, 40, 80);
    pop();
}
