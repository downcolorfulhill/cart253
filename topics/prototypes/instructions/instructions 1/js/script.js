/**
 * class one
 * benjy
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500,500);
background(30,90,90);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(30,90,90);
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
fill(199,99,9);
rect(0,0,870,240);
pop();
}
       
// function to draw roof
function drawRoof() {
push();
fill(29,199,239);
triangle(130,325,165,260,200,325);
pop();
}
// function to draw house body
function draw_House_Body() {
push();
fill(329,139,339);
rect(130,325,70,70);
pop();

}

// function to draw triangles

function draw_triangles() {
push();
fill(29,199,39);
triangle(130,99,5,20,200,95);
pop();

}
// function to draw sun 
function draw_Ellipses() {

    fill(255,199,99);
    stroke(515,345,55);
    strokeWeight(4);
 ellipse(500, 30, 340, 240);


   fill(5,199,99);
    stroke(515,345,55);
    strokeWeight(4);
 ellipse(300, 330, 40, 40);

}

function drawPerson() {
    line(320, 390, 320, 310);

}





