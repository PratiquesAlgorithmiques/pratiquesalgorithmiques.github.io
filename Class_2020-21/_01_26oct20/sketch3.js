var compteur = 0
var moins = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(5)
}
  
function draw() {
    background(255, 255, 255)
    stroke(0, 255, 0)
    strokeWeight(10);
    
    fill(0, 0, 255)
    rect(110, 110, 50, 50)

    fill(255, 0, 0)
    rect(500, 110, 200, 50)

    circle(random(windowWidth), random(windowHeight), random(300))
    line(0, 0, windowWidth, random(windowHeight))
}
  