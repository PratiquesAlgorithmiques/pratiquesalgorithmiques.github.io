// ARRAY = une variable composée d'une liste d'éléments séparés par des virgules
var myarray    = ["images/cat0.jpg", "images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg", "images/cat4.jpg"];
var current    
var monimage

// var im0, im1, im2, im3, im4

function preload() {
  var pos = floor(random(myarray.length))
  current = myarray[pos]
  monimage = loadImage(current);

  // im0 = loadImage("images/cat0.jpg");
  // im1 = loadImage("images/cat1.jpg");
  // im2 = loadImage("images/cat2.jpg");
  // im3 = loadImage("images/cat3.jpg");
  // im4 = loadImage("images/cat4.jpg");
}

function setup() {
  // print(pos)
  print(myarray)
  createCanvas(400, 400);

  // EXEMPLES de Data Structures créés par nous
  // Regarder dans le console de Chrome pour voir les résultats
  
  // Un array [] qui contient deux objets {}
  // Chaque objet {} contient de key:value pairs, une ou plusieurs séparés par des virgules
  var m = [{text: "hello"}, {text: "bonjour", color: "red"}]

  // on pointe le 2e élément, et puis le key text en utilisant "dot syntax" .text
  print(m[1].text)
  print(m[1].color)

  // Un array [] qui contient deux objets {} dont les keys sont associés à des arrays 
  var g = [{text: ["a", "b", "c"]}, {text: ["d", "e", "f"]}]

  // on pointe le 1e élément [0], et puis le key text. comme le key contient un array on dit l'élément voulu [1]
  print(g[0].text[1])

  // un objet qui contient deux key:value pairs, le key next contient un array
  var img0 = {img: "images/cat0.jpg", next: ["images/cat3.jpg", "images/cat4.jpg"]}

  // on obtient = "images/cat0.jpg"
  print(img0.img)

  // on obtient l'array en entier = ["images/cat3.jpg", "images/cat4.jpg"]
  print(img0.next)

  // on obtient = "images/cat4.jpg"
  print(img0.next[1])

  // on obtient le nombre d'éléments dans l'array img0.next
  print(img0.next.length)

  // on obtient soit 0 soit 1
  var p = floor(random(img0.next.length))

  print(p)
  // print("plan", plan)
  // print("current = ", current)

  // boucle for 
  for (var i = 0; i < myarray.length; i++) {
    print(myarray[i])
  }
}

function draw() {
  background(220);
  image(monimage, 50, 50)
}
