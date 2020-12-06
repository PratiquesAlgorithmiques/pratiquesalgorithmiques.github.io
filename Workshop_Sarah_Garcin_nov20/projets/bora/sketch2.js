function setup() {
    var monsketch = createCanvas(1000, 350);
    monsketch.parent("monsketch");

}
 
function draw() {

    // ellipse(180, 300, 20, 25)


    // présent 현재 시간

    rectMode(CENTER);
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1000, 40));

    // ellipse(100, 100, 15, 15);

    // rect(0, 0, 20, 20);

    // ellipse(-10, -10, 10, 10);

    // let c = color(255, 300, 300);
    // fill(c);
    // ellipse(25, 25, 30, 30);

    // c = color(0);
    // fill(c);
    // ellipse(65, 65, 80, 80);


    // présent 현재 시간 흔적
    
    translate (-100, -100)
    rect(0, 0, 10, 10)
    
    line(mouseX, mouseY, mouseX, mouseY);
}
