function setup() {
    var monsketch = createCanvas(1300, 500);
    monsketch.parent("monsketch");
    frameRate(120)
    createLoop({duration:3, gif:true})
}
 
function draw() {
    background('rgba(300,300,300, 0.25)')

    fill(0)

    translate(width / 2, height / 2)
    const radius = height / 3
    const x = cos(animLoop.theta) * radius
    const y = sin(animLoop.theta) * radius
    ellipse(x, y, 20, 20)
    
    ellipse(160,20,20,20)

    ellipse(0,120,10,10)

    ellipse(-140,40,30,30)

}
