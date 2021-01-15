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
				
				
				// LE NOUVEAUTÉ EST ICI (on passe une référence au div et aussi un mot qui sera utilisé dans la fonction p5one)
				p5one(div, "rect")
				p5one(div, "ellipse")										// appeler la fonction p5one, envoyer le div (myContainer0)
				
				p5two(div)													// on peut aussi appeler une deuxième fonction

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


// quelleforme div et quelleforme sont des arguments qu'on fait passer au moment où on appelle cette fonction
// cela permet de personaliser l'instance, le if plus bas l'utilise pour choisir de montrer un cercle ou un carré

function p5one(div, quelleforme) {											// dans une fonction qu'on appelle au dessus
	const s = ( p ) => {													// syntaxe pour l'instance mode

		p.setup = function() {
		  p.createCanvas(400, 200);
		  p.fill(255, 0, 0)	// random color
		};
	  
		p.draw = function() {
		  p.background(100);

		  if (quelleforme == "rect") {										// prise de décision
		  	p.rect(100, 100, 50, 50);										// si (quelleforme == "rect") = true 
		  } else {															// si (quelleforme == "rect") = false
			p.ellipse(100, 100, 50, 50);
		  }

		};
	}

	let myp5 = new p5(s, div);
}

// Une deuxième fonction
function p5two(div) {											// dans une fonction qu'on appelle au dessus
	const s = ( p ) => {										// syntaxe pour l'instance mode

		var x
		p.setup = function() {
		  p.createCanvas(400, 100);
		  p.fill(0, 100, 0)	
		  x = p.random(0, 380)
		};
	  
		p.draw = function() {
		  p.background(100);
		  p.ellipse(x, 25, 50, 10);
		};
	}

	let myp5 = new p5(s, div);
}


// fonction javascript qui choisit aléatoirement un mot depuis un array
function getText(){
	var couleur = ["green", "dark", "black", "pure", "red", "blue", "yellow", "saphir", "brown"];

	return couleur[Math.floor(Math.random() * couleur.length)];
}
