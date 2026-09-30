/**
 * An Alien
 * Pippin Barr
 *
 * It is an alien. Yep, drawing anything moderately complex with
 * shapes is pretty painful!
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

  // Draw the body
  push();
  fill(127);
  rect(320, 4, 300, 200);
  pop();

  // Draw the head
  push();
  fill(100);
  rect (320, 240, 250, 400);
  pop();
  
  // Draw the eyes
  push();
  fill(0);
  rect(250, 240, 80, 250);
  rect(390, 240, 80, 250);
  pop();

  // Draw the nostrils
  push();
  fill(0);
  rect(300, 350, 10, 10);
  rect(340, 350, 10, 10);
  pop();

  // Draw the mouth
  push();
  strokeWeight(150);
  stroke(100, 200, 0);
  noFill();
  angleMode(DEGREES);
  arc(320, 240, 200, 340, 65, 115);
  pop();
}