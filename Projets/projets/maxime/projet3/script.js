// Générer du texte 
class generateText extends Paged.Handler {
    constructor(chunker, polisher, caller) {
        super(chunker, polisher, caller);
    }
    beforeParsed(content) {
        // cibler la section dans laquelle on veut intégrer le texte
        var section = content.querySelector('.text');
        // cette boucle va générer un nombre de phrases souhaitées

        var input = prompt()

        for (var i = 0; i < 100; i++) {
            // appel de la fonction de génération de phrases
            var sentence = generateSequence(input);
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
function generateSequence(input) {
    var markovChain = markovChainGenerator(input)
    const words = Object.keys(markovChain)
    var result = ""
    for (var i = 0; i < 10; i++) {
        var seed = Math.floor(Math.random() * words.length)
        var firstWord = words[seed]
        result += firstWord + ' ';
        newWord = markovChain[firstWord][Math.floor(Math.random() * markovChain[firstWord].length)]
        firstWord = newWord;
    }


    return result;

}

function markovChainGenerator(text) {
    const textArr = text.split(' ')
    const markovChain = {};
    for (let i = 0; i < textArr.length; i++) {
        let word = textArr[i].toLowerCase().replace(/[\W_]/, "")
        if (!markovChain[word]) {
            markovChain[word] = []
        }
        if (textArr[i + 1]) {
            markovChain[word].push(textArr[i + 1].toLowerCase().replace(/[\W_]/, ""));
        }
    }
    return markovChain
}