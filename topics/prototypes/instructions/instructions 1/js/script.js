/**
 * instructions 1
 * benjy
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background(30, 90, 90);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(30, 90, 90);
    drawSky();
    drawRoof();
    draw_House_Body();
    draw_triangles();
    draw_Ellipses();
    drawPerson();


}
// function to draw sky
function drawSky() {
    push();
    fill(199, 99, 9);
    rect(0, 0, 870, 240);
    pop();
}

// function to draw roof
function drawRoof() {
    push();
    fill(29, 199, 239);
    triangle(130, 325, 165, 260, 200, 325);
    pop();
}
// function to draw house body
function draw_House_Body() {
    push();
    fill(329, 139, 339);
    rect(130, 325, 70, 70);
    pop();

}



// function to draw funky sun rays 

function draw_triangles() {
    push();
    fill(29, 199, 39);
    triangle(130, 99, 115, 20, 500, 95);
    pop();

    push();
    fill(29, 199, 39);
    triangle(230, 199, 1115, 20, 500, 95);
    pop();

    push();
    fill(29, 199, 39);
    triangle(330, 199, 1115, 120, 600, 195);
    pop();



}
// function to draw sun 
function draw_Ellipses() {

    fill(255, 199, 99);
    stroke(515, 345, 55);
    strokeWeight(4);
    ellipse(500, 30, 340, 240);


    fill(5, 199, 99);
    stroke(515, 345, 55);
    strokeWeight(4);
    ellipse(300, 330, 40, 40);

}

function drawPerson() {
    line(300, 500, 300, 350);
    line(300, 400, 0, 30);
    line(830, 80, 300, 400);


}





