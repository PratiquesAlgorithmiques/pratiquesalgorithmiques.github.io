class interfaceButton extends Paged.Handler{
	constructor(chunker, polisher, caller){
		super(chunker, polisher, caller);
	}
	afterRendered(pages){
		var button = document.createElement('div');
		button.classList.add("screen-button");
		button.innerHTML = "<a href='web.html'>Voir la version web</a>";
		document.body.appendChild(button);
	}
}

Paged.registerHandlers(interfaceButton);

var numberOfPages = 12;

class createPages extends Paged.Handler {
  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller);
  }

  // Executé avant de séparer le contenu en pages 
  // Utilise la variable numberOfPages (plus haut) pour déterminer le nombre de pages
  // Essayer de changer le nombre
  beforeParsed(content) {
    for (var i = 0; i < numberOfPages; i++) {
      // section est un élément vide structurant qu'on utilise plus tard
      // dans style.css on utilise break-before: page; afin de faire qu'il y a une page par section
      var section = document.createElement('section');
      content.appendChild(section)
    }
  }



  // Executé après la séparation des pages
  afterRendered(pages) {

    // loop à travers toutes les pages, page contient la page actuelle de la boucle
    pages.forEach(page => {

      // page.position est une propriété de page qui est son numéro (qui commence par 0) 
      // le if évite qu'il mette un p5 sur la couverture

      if (page.position > 0) {
        var container = page.element.querySelector('section');            // trouver l'élément section sur la page actuelle
        var div = document.createElement('div');                    // créer un div (pas encore intégré)
        div.id = "myContainer" + page.position                     // donne un id, si page.position = 0 ce serait myContainer0, etc.


        p5one(div)                                                          // appeler la fonction p5one, envoyer le div (myContainer0)
        // p5two(div)                                                       // vous pouvez créer d'autres fonctions et les appeler

        // Crée un paragraphe, lui donne un id, appelle getText() (plus bas) et change le html du paragraphe
        // le rajoute au div (après le p5)
        var para = document.createElement('p');
        //para.id       = "para" + page.position    
       // para.innerHTML    = getText();

        div.appendChild(para);

        container.appendChild(div);                                         // attacher le div à la section
      }
    })
  }
}
Paged.registerHandlers(createPages);





function p5one(div) {
  const s = (p) => {
    //let x =10;
    //let y =10;
    //let img1;
    //let img2;
    //let img3;
    //let img4;
    var bubbles = [];
    var img = [];




    p.setup = function () {
      p.createCanvas( 600, 800);
      //p.fill(70,0,0);

      for (var i = 0; i < 21; i++) {
        img[i] = p.loadImage('images/champi' + i + '.jpg');
      }


      // img[0] = p.loadImage('images/champi0.jpg');
      // img[1] = p.loadImage('images/champi1.jpg');
      // img[2] = p.loadImage('images/champi2.jpg');
      // img[3] = p.loadImage('images/champi3.jpg');
      // img[4] = p.loadImage('images/champi4.jpg');
      // img[5] = p.loadImage('images/champi5.jpg');
      // img[6] = p.loadImage('images/champi6.jpg');
      // img[7] = p.loadImage('images/champi7.jpg');
      // img[8] = p.loadImage('images/champi8.jpg');
      // img[9] = p.loadImage('images/champi9.jpg');
      // img[10] = p.loadImage('images/champi10.jpg');
      // img[11] = p.loadImage('images/champi11.jpg');
      // img[12] = p.loadImage('images/champi12.jpg');
      // img[13] = p.loadImage('images/champi13.jpg');
      // img[14] = p.loadImage('images/champi14.jpg');
      // img[15] = p.loadImage('images/champi15.jpg');
      // img[16] = p.loadImage('images/champi16.jpg');
      // img[17] = p.loadImage('images/champi17.jpg');
      // img[18] = p.loadImage('images/champi18.jpg');
      // img[19] = p.loadImage('images/champi19.jpg');
      // img[20] = p.loadImage('images/champi20.jpg');


    }

    p.mousePressed = function () {
      var r = p.floor(p.random(0, img.length));
      var b = new Bubble(p.mouseX, p.mouseY, img[r])
      bubbles.push(b);
    }

    p.draw = function () {
     // p.background(220, 70, 80);
      for (var i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display();
      }
      p.noStroke();
      
      //p.rect(0,750,600,50)

     // p.rect(500,0,50,50)

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
        p.imageMode(p.CENTER);
        p.image(this.img, this.x, this.y, 150, 150);
        
        //ellipse(this.x, this.y, 48, 48);
      }

      this.update = function () {
        this.x = this.x + 0;
        this.y = this.y + 0;

      }
    }
  }
  let myp5 = new p5(s, div);
}