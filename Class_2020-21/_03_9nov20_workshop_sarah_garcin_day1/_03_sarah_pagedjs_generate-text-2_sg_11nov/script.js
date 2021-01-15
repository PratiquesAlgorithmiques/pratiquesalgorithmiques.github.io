// Générer du texte 
class generateText extends Paged.Handler{
	constructor(chunker, polisher, caller){
		super(chunker, polisher, caller);
	}
	beforeParsed(content){ 
		// cibler la section dans laquelle on veut intégrer le texte
		var section = content.querySelector('.text');
		// cette boucle va générer un nombre de phrases souhaitées
		// ici 100 phrases 
		for(var i= 0; i<100; i++){
			// appel de la fonction de génération de phrases
			var sentence = generateSentence();
			// création d'un élément paragaphe
			var paragraph = document.createElement('p');
			// ajout de la phrase générée dans le <p>
			paragraph.innerHTML = sentence;
			// ajout du <p> dans la section 
			section.appendChild(paragraph);
		}
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





 