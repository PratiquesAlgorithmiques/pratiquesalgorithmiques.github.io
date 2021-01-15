var currentKey = "";

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255, 0, 0);

    if (currentKey == "a") {
        fill(0, 255, 0)
        rect(100, 100, 10, 10)

    } else if (currentKey == "d") {
        fill(0, 0, 255)
        ellipse(100, 100, 10, 10)

    } else if (currentKey == "k") {
        fill(0, 0, 255)
        ellipse(300, 600, 20, 500)

    } else {
        print("nope")
    }

    // print("mouseIsPressed=", mouseIsPressed)

    if (mouseIsPressed) {
        fill(0, 0, 255)
        ellipse(500, 200, 100, 100)
    }
}

function keyPressed() {
    currentKey = key;
    print("currentKey=", currentKey)
}







// RECT
    // strokeWeight(50)
    // stroke(0, 255, 0)
    // fill(random(255), random(255), random(255))
    // rect(200, 100, 100, 600);

    // // LINE
    // strokeWeight(1)
    // stroke(0)
    // line(0, 0, width/2, height/2)
    // // line(0, 0, mouseX, mouseY)

    // // print(windowWidth, windowHeight)
    // // print(width, height)
    // print(mouseX, mouseY)