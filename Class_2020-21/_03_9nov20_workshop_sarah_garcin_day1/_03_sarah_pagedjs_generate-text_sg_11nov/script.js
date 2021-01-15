// Définir le nombre de pages à créer 
var numberOfPages = 23; 

// créer les pages en ajoutant autant de section que le nombre de page souhaitée
// les pages sont ensuite créees par pagedjs grâce à la propriété break-before en css 
class createPages extends Paged.Handler{
	constructor(chunker, polisher, caller){
		super(chunker, polisher, caller);
	}
	beforeParsed(content){ 
		for(var i = 0; i<numberOfPages; i++){
			var page = document.createElement('section');
			content.appendChild(page);
		}
	}
}

Paged.registerHandlers(createPages);


// Générer du texte 
class generateText extends Paged.Handler{
	constructor(chunker, polisher, caller){
		super(chunker, polisher, caller);
	}
	afterRendered(pages){
		pages.forEach(page=>{
			console.log(generateSentence());
			// pour laisser des pages blanches au début et à la fin 
			if(page.position != 0 && page.position != 1 && page.position != numberOfPages-1 && page.position != numberOfPages){ 
				var container = page.element.querySelector('.pagedjs_page_content');
				var text = document.createElement('div');
				text.classList.add("text");
				var sentence = generateSentence();
				text.innerHTML = sentence;
				container.appendChild(text);
			}
		});
	}

}

Paged.registerHandlers(generateText);

// Générateur de phrases
function generateSentence(){
	var noms = ["Le pigeon", "L'armoire", "Le livre", "Le canard", "Le code", "La couette", "Le lit", "Le petit ver de terre", "La patate", "La loutre"];
	var verbes = ["frappe", "court", "vole", "dort", "coupe", "roule", "marche", "lit", "écrit", "mange"];
	var adjectifs = ["magnifique", "magique", "énorme", "rigolo", "habile", "espiègle", "lunatique", "agréable", "efficace", "calme"];
	var adverbes = ["doucement", "élégament", "précisemment", "rapidement", "drôlement", "humblement", "gentillement", "horriblement", "passionément", "courageusement"];
	var preposition = ["sous", "dans", "sur", "dessous", "dessus", "en-dessous", "au-dessus", "par", "à travers", "vers"];

	var rand1 = Math.floor(Math.random() * 10);
	var rand2 = Math.floor(Math.random() * 10);
	var rand3 = Math.floor(Math.random() * 10);
	var rand4 = Math.floor(Math.random() * 10);
	var generateSentence = noms[rand2] + " " + adjectifs[rand1]  + " " + verbes[rand4] + " " +  adverbes[rand3];

	return generateSentence;
}





 