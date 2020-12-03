

      //let x =10;
      //let y =10;
      //let img1;
      //let img2;
      //let img3;
      //let img4;
      var bubbles = [];
      var img = [];
  
  
  
  
     function setup() {
       createCanvas(innerWidth, innerHeight);
        //p.fill(70,0,0);
  
  
        img[0] = loadImage('images/champi0.jpg');
        img[1] = loadImage('images/champi1.jpg');
        img[2] = loadImage('images/champi2.jpg');
        img[3] = loadImage('images/champi3.jpg');
        img[4] = loadImage('images/champi4.jpg');
        img[5] = loadImage('images/champi5.jpg');
        img[6] = loadImage('images/champi6.jpg');
        img[7] = loadImage('images/champi7.jpg');
        img[8] = loadImage('images/champi8.jpg');
        img[9] = loadImage('images/champi9.jpg');
        img[10] = loadImage('images/champi10.jpg');
        img[11] = loadImage('images/champi11.jpg');
        img[12] = loadImage('images/champi12.jpg');
        img[13] = loadImage('images/champi13.jpg');
        img[14] = loadImage('images/champi14.jpg');
        img[15] = loadImage('images/champi15.jpg');
        img[16] = loadImage('images/champi16.jpg');
        img[17] = loadImage('images/champi17.jpg');
        img[18] = loadImage('images/champi18.jpg');
        img[19] = loadImage('images/champi19.jpg');
       img[20] = loadImage('images/champi20.jpg');
  
  
      }
  
      function mousePressed () {
        var r = floor(random(0, img.length));
        var b = new Bubble(mouseX, mouseY, img[r])
        bubbles.push(b);
      }
  
      function draw () {
        background(68, 65, 66);
        for (var i = bubbles.length - 1; i >= 0; i--) {
          bubbles[i].update();
          bubbles[i].display();
        }
  
  
        //p.image(img[0],p.width/2,p.height/2,p.mouseX,p.mouseY);
        // p.image(img[1],p.width/3,p.height/3,p.mouseX,p.mouseY);
        //p.image(img[2],p.width/2.4,p.height/2.4,p.mouseX,p.mouseY);
        // p.image(img[3],p.width/2.5,p.height/2.5,p.mouseX,p.mouseY);
  
  
      }
  
      function Bubble(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.display = function () {
          imageMode(CENTER);
          image(this.img, this.x, this.y, 150, 150);
          //ellipse(this.x, this.y, 48, 48);
        }
  
        this.update = function () {
          this.x = this.x + 0;
          this.y = this.y + 0;
  
        }
      }
   