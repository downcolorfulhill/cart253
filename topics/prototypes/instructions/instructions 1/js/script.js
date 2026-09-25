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
  createCanvas(800, 800);
}

/**
 * Draws the concentric circles
 */
function draw() {
  background("#257524");
  
  // We want this to apply to *all* circles, so it can go out here
  noStroke();
  
  // Begin circles diminishing in size and darkness
  push();
  fill(0);
  rect(200, 200, 300, 5);
  pop();
  
  push();
  fill(50);
  rect(200, 200, 250, 66);
  pop();
  
  push();
  fill(100);
  rect(200, 200, 200, 400);
  pop();
  
  push();
  fill(150);
  rect(200, 200, 150, 68);
  pop();
  
  push();
  fill(200);
  rect(200, 200, 100, 500);
  pop();
  
  push();
  fill(250);
  rect(200, 200, 50, 300);
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


