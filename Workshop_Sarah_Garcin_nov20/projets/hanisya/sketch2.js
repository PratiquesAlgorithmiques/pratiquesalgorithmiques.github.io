var compteur = 0;
var moins = 0;
let rectX = 0;
let fr = 60;

function preload() {
  img2 = loadImage('images2/a.jpg');
  img3 = loadImage('images2/b.png');
  img4 = loadImage('images2/c.png');
  img5 = loadImage('images2/d.jpg');
  img6 = loadImage('images2/e.jpg');
  img7 = loadImage('images2/f.jpg');
  img8 = loadImage('images2/g.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2.5)
}


function draw() {
  background('black');
  textFont("Charm")
  textSize(70)
  fill(0,0,0)


  compteur = compteur + 100;
  moins = moins + 10
  print(compteur);
  
  print(random(100))
  image(img2, random(windowWidth), random(windowHeight));
  image(img3, random(windowWidth), random(windowHeight));
  image(img4, random(windowWidth), random(windowHeight)); 
  image(img5, random(windowWidth), random(windowHeight)); 
  image(img6, random(windowWidth), random(windowHeight)); 
  image(img7, random(windowWidth), random(windowHeight)); 
  image(img8, random(windowWidth), random(windowHeight)); 
}

