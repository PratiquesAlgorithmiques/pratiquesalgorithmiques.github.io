function setup() {
  my_sketch = createCanvas(windowWidth, windowHeight)
  my_sketch.parent("my_sketch");
  frameRate(3)
  background(200)
}


function draw() {
  textSize(random(200))
  var letter = String.fromCharCode(random(255))
  text(letter, random(width), random(height))
  fill(random(255), random(255), random(255), random(255));
}
