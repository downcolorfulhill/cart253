/**
 * Cursed Umbrella
 * Pippin Barr
 *
 * An umbrella. Cursed by beziers. And curved by them.
 */

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draws an umbrella
 */
function draw() {
  // Red from the blood of its enemies
  background("red");
  
  // Stick
  push();
  strokeWeight(10);
  line(200, 150, 200, 300);
  pop();
  
  // Handle
  push();
  strokeWeight(10);
  stroke("yellow");
  noFill();
  arc(220, 300, 40, 60, 0, PI)
  pop();
  
  // Cursed umbrella shape
  // Uses bezier curves to construct a shape that will then be filled
  push();
  fill("blue");
  // Officially start drawing the shape of the umbrella
  beginShape();
  // A vertex to start drawing the shape from
  // This is the bottom left point of the umbrella
  vertex(100, 200);
  // Now it starts getting cursed because does anybody REALLY KNOW
  // how Bezier curves work? I don't think so.
  // Each of these has two controls points, then the anchor point
  // to actually connect to, so it draws a curve from that first point
  // to the other side of the umbrella (i.e. the Big Curve)
  bezierVertex(100, 50, 300, 50, 300, 200);
  // Then we draw three little curves back over to the original
  // point
  bezierVertex(300, 150, 233, 150, 233, 200);
  bezierVertex(233, 150, 166, 150, 166, 200);
  bezierVertex(166, 150, 100, 150, 100, 200);
  // And by ending our shape we fill it with blue as above
  endShape();
  pop();
  
  // But do I really understand it? Nah, no really, I have some hunches
  // but it's tough.
}