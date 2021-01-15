// version pour un sketch placé dans un div avec id

// setup = function() {
//     var cc = createCanvas(500, 200);
//     cc.parent("#first")
//     background(255, 0, 0);
// }


// function pour créer des sketchs p5 à la volée
function p5one(div, w, h) {											// w et h sont des paramètres envoyés au moment de l'appel = p5one(sec, 300, 140)
    const s = ( p ) => {	

        p.setup = function() {
            p.createCanvas(500, 200);
        }

        p.draw = function() {
            p.background(0, 0, 0);
            p.fill(p.random(255), p.random(255), p.random(255));
            p.rect(w, h, 30, 30);                                  // w et h sont utilisés ici
        }

    };
	let p5one = new p5(s, div);
}

// le code est commencé ici
window.onload = function() {                                       // appelé au moment où la page se charge
    let first = document.getElementById("first");
    p5one(first, 100, 50)                                          // w et h sont déterminés ici


    let sec = document.getElementById("second");
    p5one(sec, 300, 140)                                           // w et h sont déterminés ici
}