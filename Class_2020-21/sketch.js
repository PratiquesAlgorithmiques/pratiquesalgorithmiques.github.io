var str = ""
var counter = 0
var arr = ["happy", "sad", "hungry", "thirsty", "tired"]

function setup() {
    noCanvas();
    frameRate(1)

    str = "I am feeling"
}

function draw() {

    counter++

    var one = document.getElementById("one")

    // var temp = str.toUpperCase()
    // var temp = str + " " + counter
    // var temp = int(random(100))
    // var temp = str.replaceAll("feeling", "very")

    var r = int(random(arr.length))
    var temp = str + " " + arr[r]
    
    one.innerHTML = temp
}