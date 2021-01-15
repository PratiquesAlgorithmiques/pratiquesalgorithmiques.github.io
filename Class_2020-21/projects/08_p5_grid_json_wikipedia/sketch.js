var data
var arr = ["dog", "fish", "cat"]            // query word

function preload() {
    var r = int(random(arr.length))         // une position aléatoire dans l'array

    data = loadJSON("https://en.wikipedia.org/api/rest_v1/page/summary/" + arr[r])      // wikipedia base api + query word
}

function setup() {
    frameRate(1)
}

function draw() {
    document.getElementById("myimg").src = data.thumbnail.source                        // charge image trouvée dans img

    var one = document.getElementById("one")
    one.innerHTML = data.extract                                                        // affiche extrait
}


