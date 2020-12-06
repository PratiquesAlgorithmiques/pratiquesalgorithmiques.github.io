var montexte = "Tiny Studio"
var montexte2 = "Art and Design Initiative"
var compteur = 0;
var moins = 0;

function preload() {
  img2 = loadImage('images/1.png');
  img3 = loadImage('images/2.png');
  img4 = loadImage('images/3.png');
  img5 = loadImage('images/4.png');
  img6 = loadImage('images/5.png');
  img7 = loadImage('images/6.png');
  img8 = loadImage('images/7.png');
  img9 = loadImage('images/8.png');
  img10 = loadImage('images/9.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3)
}

function draw() {
  background('white');
  textFont("Charm")
  textSize(70)
  fill(0,0,0)

  compteur = compteur + 100;
  moins = moins + 10
  print(compteur);

  print(random(100))
  image(img10, random(windowWidth), random(windowHeight));
  image(img2, random(windowWidth), random(windowHeight));
  image(img3, random(windowWidth), random(windowHeight));
  image(img4, random(windowWidth), random(windowHeight)); 
  image(img5, random(windowWidth), random(windowHeight)); 
  image(img6, random(windowWidth), random(windowHeight));
  image(img7, random(windowWidth), random(windowHeight));
  image(img8, random(windowWidth), random(windowHeight));
  image(img9, random(windowWidth), random(windowHeight));

  fill (0,0,0)
  text (montexte2, random(windowWidth), random(windowHeight));
}