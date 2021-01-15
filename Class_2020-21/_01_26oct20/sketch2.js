var compteur = 0;
var moins = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}
  
function draw() {
    background(255, 0, 0);
    compteur = compteur + 10;
    moins = moins - 10
    circle(compteur, compteur, compteur)
    // circle(moins, moins, moins)
}
  