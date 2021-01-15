const { randomBytes } = require("crypto");

function setup() {
    var monsketch = createCanvas(800, 100);
    monsketch.parent("monsketch");
    // frameRate(1);
    // createP('this is some text');
}

function draw() {
    background(255,0,0);
    fill(80, 20, 255)
    circle(width/2 + random(-3, 3), height/2 + random(-3, 3), 40)
}