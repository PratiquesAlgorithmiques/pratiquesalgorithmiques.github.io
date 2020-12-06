let x = 50;
 function setup() {
   rectMode(CENTER);
 }
 function draw() {
   if (x > 48) {
     x -= 2;
   } else if (x < 48) {
     x += 2;
   }
   x += floor(movedX / 5);
   background(237, 34, 93);
   fill(0);
   rect(x, 50, 50, 50);
 }
