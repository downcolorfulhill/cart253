/**
 * Literal Concentric circles
 * Pippin Barr
 *
 * It is some concentric circles. Laborious.
 */

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draws the concentric circles
 */
function draw() {
  background("#87ceeb");
  
  // We want this to apply to *all* circles, so it can go out here
  noStroke();
  
  // Begin circles diminishing in size and darkness
  push();
  fill(0);
  ellipse(200, 200, 300);
  pop();
  
  push();
  fill(50);
  ellipse(200, 200, 250);
  pop();
  
  push();
  fill(100);
  ellipse(200, 200, 200);
  pop();
  
  push();
  fill(150);
  ellipse(200, 200, 150);
  pop();
  
  push();
  fill(200);
  ellipse(200, 200, 100);
  pop();
  
  push();
  fill(250);
  ellipse(200, 200, 50);
  pop();
  
  // Or you could do it like this (we will learn this later)

  /**
  // Draw six diminishing circles with increasing fill shade
  for (let i = 0; i < 6; i++) {
    fill(i * 50);
    ellipse(200, 200, i * 10);
  }
  */
}


