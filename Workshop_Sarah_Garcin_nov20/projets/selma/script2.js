let capture;

function setup() {
    createCanvas(690, 540);
    capture = createCapture(VIDEO);
    capture.size(690, 540);
    capture.hide();
}

function draw() {
    background(255);
    image(capture, 0, 0, 690, 540);
    filter(INVERT);
}


// confirm example  

var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
    let tellme  = confirm('Est-tu coupable?'); 
    alert(`You are ${tellme}`);
     localStorage.setItem('alerted','yes');
    }
