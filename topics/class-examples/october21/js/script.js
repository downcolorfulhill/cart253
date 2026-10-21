/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let circleX = 250;
let circleY = 250;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background('skyblue');
    let newVal = squareNum(2)
    let newVal_2 = squareNum(5)
    console.log(newVal);
    console.log(newVal_2);

}
function squareNum(num) {
    let squaredNumValue = num * num;
    return squaredNumValue;


}

function calculateCloseness(objX, objY) {
    let d = dist(mouseX, mouseY, objX, objY);
    let mappedVal = map(d, 0, 250, 2, 10)
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
    let newStroke = calculateCloseness(circleX, circleY);
    console.log(newVal);


    complexCirclesP(circleX, circleY, 80, 80, newVal);
    // complexCirclesP(width / 2 - 100, height / 2, 100, 100);

    let value = random(5, 50);


}

function complexCirclesP(x, y, w, h, passedVal) {
    push();
    console.log(passedVal);
    fill(passedVal, 191, 0);
    ellipse(x, y, w, h);
    fill(5, 19, 230);
    ellipse(x, y, w - 20, h - 220);
    fill(1, 111, 3);
    ellipse(x, y, w - 20, h - 20);
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
    ellipse(width / 2 - 100, height / 2 - 100, 80, 80);
    fill(5, 19, 230);
    ellipse(width / 2 - 100, height / 2 - 100, 60, 80);
    fill(1, 111, 3);
    ellipse(width / 2 - 100, height / 2 - 100, 40, 80);
    pop();
}
function complexCircles3() {
    push();
    fill(255, 191, 0);
    ellipse(width / 2 - 200, height / 2 - 200, 80, 80);
    fill(5, 19, 230);
    ellipse(width / 2 - 200, height / 2 - 200, 60, 80);
    fill(1, 111, 3);
    ellipse(width / 2 - 200, height / 2 - 200, 40, 80);
    pop();
}
