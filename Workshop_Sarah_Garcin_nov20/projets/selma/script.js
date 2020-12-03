class interfaceButton extends Paged.Handler {
	constructor(chunker, polisher, caller) {
		super(chunker, polisher, caller);
	}
	afterRendered(pages) {
		var button = document.createElement('div');
		button.classList.add("screen-button");
		button.innerHTML = "<a href='web.html'>Voir la version web</a>";
		document.body.appendChild(button);

		pages.forEach(page => {
			/* boucle, instructions pour chacune des pages*/
			console.log(page);
			// c'est ici que on bosse   
			var pageNumber = page.position + 1;
			var pagination = document.createElement('div');
			var titleSize = page.element.querySelectorAll("h2");
			pagination.classList.add("pagination");
			pagination.style.width = pageNumber + "cm";
			titleSize.forEach(title => {
				title.style.fontSize = (pageNumber * 10) + "px";
			});
			console.log(titleSize);
			// + rajoute deux valeur qui n'ont pas le même type
			page.element.appendChild(pagination);
			//page.element.appendChild(titleSize);
			console.log(pageNumber);
			if (page.position == 0) {
				var div = document.createElement('div');					// créer un div (pas encore intégré)
				div.classList.add('containertest');				// donne un id, si page.position = 0 ce serait myContainer0, etc.


				p5one(div)
				var area = page.element.querySelector('.pagedjs_page_content');
				area.appendChild(div)
			}
			console.log(pageNumber);
			if (page.position == 8) {
				var div = document.createElement('div');
				div.classList.add('containertwo');

				p5two(div)
				var area = page.element.querySelector('.pagedjs_page_content');
				area.appendChild(div)
			}
		});
	}
}

Paged.registerHandlers(interfaceButton);

function p5one(div) {											// dans une fonction qu'on appelle au dessus
	const s = (p) => {										// syntaxe pour l'instance mode

		// code p5 en instance mode (note le p. devant tous les fonctions p5 (en vert))
		// https://www.youtube.com/watch?v=Su792jEauZg&feature=youtu.be
		// https://p5js.org/reference/#/p5/p5

		var words = ["TAN", "TAAN", "TAAAN", "SCANDALO"];

		var index = 0;

		p.setup = function () {
			p.createCanvas(325, 325);
		}

		p.draw = function () {
			p.background(0);
			p.fill(255);
			p.textSize(32);
			p.text(words[index], 12, 200);
		}

		p.mousePressed = function () {
			index = index + 1;

			if (index == words.length) {
				index = 0;
			}
		}
	};

	let myp5 = new p5(s, div);
}

// appuyer sur le mot pour que il change

function p5two(div) {											// dans une fonction qu'on appelle au dessus
	const s = (p) => {										// syntaxe pour l'instance mode

		p.setup = function () {
			p.createCanvas(400, 400);
		}

		p.draw = function () {
			p.background(50);
			p.strokeWeight(2);
			p.fill(128 + p.sin(p.frameCount * 0.1) * 128);
			if (p.mouseIsPressed) {
				p.stroke(255);
			}
			else {
				p.noStroke();
			}
			p.textSize(12 + (p.mouseX / p.width) * 72);
			p.text("SCANDALO", 50, 200);
		}
	};

	let myp5 = new p5(s, div);
}
