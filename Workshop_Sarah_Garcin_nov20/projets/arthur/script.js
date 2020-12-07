
// Définir le nombre de pages à créer 
var numberOfPages = 7;
var phrases = ["", "là où on ne m'attend pas","j'arrête le temps","si nous sommes deux","week-end","point final"];
var phrasesprint = ["","là où on ne m'attend pas","donne l'heure", "<3","semaine","point final"];

// créer les pages en ajoutant autant de section que le nombre de page souhaitée
// les pages sont ensuite créees par pagedjs grâce à la propriété break-before en css 
class createPages extends Paged.Handler {
	constructor(chunker, polisher, caller) {
		super(chunker, polisher, caller);
	}
	beforeParsed(content) {
		for (var i = 0; i < phrases.length - 1; i++) {
			var page = document.createElement('section');
			content.appendChild(page);
		}
	}
}

Paged.registerHandlers(createPages);


// Générer du texte 
class generateText extends Paged.Handler {
	constructor(chunker, polisher, caller) {
		super(chunker, polisher, caller);
	}
	afterRendered(pages) {
		pages.forEach(page => {

				var container = page.element.querySelector('.pagedjs_page_content');
				var text = document.createElement('div');
				text.classList.add("text");
				text.innerHTML = phrases[page.position];
				container.appendChild(text);

				var print = document.createElement('div');
				print.classList.add("textprint");
				if(page.position == 1){
					var x = Math.floor(Math.random()* 5);
					var y = Math.floor(Math.random()* 20);
					print.style.top = y + 'cm';
					print.style.left = x + 'cm';
					print.style.position = 'relative';
				}


				if(page.position == 2){
					var today = new Date();
					var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
					print.innerHTML = time;
				}
				else{
					print.innerHTML = phrasesprint[page.position];
				}
				
				container.appendChild(print);

				//if(page.position == 4) {
				//	var div3 = document.createElement('div');					
				//	div3.id  = "myContainer" + page.position;			
					//p5two(div3);														
					//container.appendChild(div3);	
				//}

				if(page.position == 5) {
							
				    
					var div2 = document.createElement('div');					
					div2.id  = "myContainer" + page.position;			

					p5one(div2);														
					container.appendChild(div2);	
							
				}
		});

	}

}

Paged.registerHandlers(generateText);


function p5one(div) {										
	const s = (p) => {										

		let x = 280;
		let y = 400;
		let h = 40;
	
	  							

		p.setup = function () {
			p.createCanvas(600, 900);
			p.fill(255, 0, 0);
			p.strokeWeight(0);
		};

		p.draw = function () {
			p.background(255,255,255);

			p.circle(x, y, h);
				h=h+1;
		}
		
		
	}
	let myp5 = new p5(s, div);
  }
 // function p5two(div) {										
	//const s = (p) => {	

		// p.setup = function () {
		
		// p.createCanvas(400, 400);
		// toggle = !toggle;
		// if (toggle == 0) { 
			// fill(0,0,0);
		// } else {
			// fill(255,255,255);
		// }
	// }
// }
// }