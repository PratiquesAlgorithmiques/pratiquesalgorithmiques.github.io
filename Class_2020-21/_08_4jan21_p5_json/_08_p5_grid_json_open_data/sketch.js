var data
var gooddata

function preload() {
    // data = loadJSON("codes-postaux.json")
    data = loadJSON("fontaines.json")
}

function setup() {
    noCanvas();
    frameRate(1)

    gooddata = Object.values(data)                  // permet de corriger une erreur dans p5, gooddata est maintenant un array

    print(gooddata.length)
}


function draw() {

    var one = document.getElementById("one")

    var r = int(random(gooddata.length))

    // fointaines.json
    var temp = gooddata[r].geometry.coordinates[0] + ", " + gooddata[r].geometry.coordinates[1]

    // codes-postaux.json
    // svar t = gooddatas[0].nomCommune               

    one.innerHTML = temp
}