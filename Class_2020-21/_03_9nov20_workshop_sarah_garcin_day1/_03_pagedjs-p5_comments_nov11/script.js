var numberOfPages = 5; 

class createPages extends Paged.Handler{
	constructor(chunker, polisher, caller){
		super(chunker, polisher, caller);
	}

	// Executé avant de séparer le contenu en pages 
	// Utilise la variable numberOfPages (plus haut) pour déterminer le nombre de pages
	// Essayer de changer le nombre
	beforeParsed(content){ 
		for(var i = 0; i < numberOfPages; i++){
			// section est un élément vide structurant qu'on utilise plus tard
			// dans style.css on utilise break-before: page; afin de faire qu'il y a une page par section
			var section = document.createElement('section');			
			content.appendChild(section)
		}
	}

	// Executé après la séparation des pages
	afterRendered(pages){

		// loop à travers toutes les pages, page contient la page actuelle de la boucle
		pages.forEach(page => {	

			// page.position est une propriété de page qui est son numéro (qui commence par 0) 
			// le if évite qu'il mette un p5 sur la couverture

			if(page.position > 0) {
				var container 	= page.element.querySelector('section');			// trouver l'élément section sur la page actuelle
				var div 		= document.createElement('div');					// créer un div (pas encore intégré)
				div.id 			= "myContainer" + page.position						// donne un id, si page.position = 0 ce serait myContainer0, etc.
						

				p5one(div)															// appeler la fonction p5one, envoyer le div (myContainer0)
				// p5two(div)														// vous pouvez créer d'autres fonctions et les appeler

				// Crée un paragraphe, lui donne un id, appelle getText() (plus bas) et change le html du paragraphe
				// le rajoute au div (après le p5)
				var para 		= document.createElement('p');
				para.id 		= "para" + page.position	
				para.innerHTML 	= getText();
				div.appendChild(para);
				
				container.appendChild(div);											// attacher le div à la section
			}
		})
	}
}
Paged.registerHandlers(createPages);

function p5one(div) {											// dans une fonction qu'on appelle au dessus
	const s = ( p ) => {										// syntaxe pour l'instance mode

		// code p5 en instance mode (note le p. devant tous les fonctions p5 (en vert))
		// https://www.youtube.com/watch?v=Su792jEauZg&feature=youtu.be
		// https://p5js.org/reference/#/p5/p5

		let x 		= 100.0; 
		let y 		= p.random(0, 200); 
		let speed 	= p.random(1, 10); 							// random float entre 1 et 10

		p.setup = function() {
		  p.createCanvas(400, 200);
		  p.fill(p.random(255), p.random(255), p.random(255))	// random color
		};
	  
		p.draw = function() {
		  p.background(100);
		  
		  x += speed; 											// augmenter par speed 

		  if(x > p.width) {										// si plus grand que la largeur, x = 0
			  x = 0; 
		  }

		  p.ellipse(x, y, 50, 50);
		};
	};

	let myp5 = new p5(s, div);
}



// fonction javascript qui choisit aléatoirement un mot depuis un array
function getText(){
	var couleur = ["green", "dark", "black", "pure", "red", "blue", "yellow", "saphir", "brown"];

	return couleur[Math.floor(Math.random()* couleur.length)];
}