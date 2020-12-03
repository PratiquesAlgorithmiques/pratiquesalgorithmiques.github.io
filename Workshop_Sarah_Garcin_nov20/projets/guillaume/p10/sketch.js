function p5two(div) {
   const ss = ( p ) => {

       var img = [];

       p.preload = () => {
         img[0]  = p.loadImage('images/champi1.jpg');
         img[1] = p.loadImage('images/champi2.jpg');
       }
       p.setup = () => {
         p.createCanvas(400, 400);
         p.background(0);
         var d = p.round(p.random(1))
         p.image(img[d], 0, 0, 400, 400)
       }
   }

   let myp5 = new p5(ss, div);
}