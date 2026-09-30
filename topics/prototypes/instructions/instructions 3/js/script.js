/**
 instructions 3
 benjy
 */

const { useEffect } = require("react");

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(640, 480);
}

/**
 * Draws the alien
 */
function draw() {
  // Black background
  background("yellow");
  
  drawAlien();
}

/**
 * The actual alien drawing function
 */
function drawAlien() {
  // Apply this as the default
  noStroke();


  // Draw the beautiful mouth
  push();
  fill(100);
  rect (170, 100, 300, 40);
  pop();
  


  // Draw the EYES
  push();
  fill(0);
  rect(200, 30, 10, 10);
  rect(400, 35, 10, 10);
  pop();

  // Draw the heart
  push();
  strokeWeight(150);
  stroke(100, 200, 0);
  noFill();
  angleMode(DEGREES);
  arc(320, 200, 200, 340, 65, 115);
  pop();
}