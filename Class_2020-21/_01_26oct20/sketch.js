function setup() {
  // createCanvas(1000, 400);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 25);
  sphere(400);
  fill(50);
  rect(30, 20, 55, 55);
  circle(windowWidth/2, windowHeight/2, 200);
  fill(255, 0, 0);
  circle(300, 300, 8);
}
