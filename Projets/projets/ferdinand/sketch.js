var vids = ["1.MP4","2.MP4","3.MP4"];
var play, stop, nextvideo
var counter = 0

function setup(){
  noCanvas();

  play = createButton('play');
  play.id("play")
  play.mousePressed(playme);

  stop = createButton('stop');
  stop.id("stop")
  stop.mousePressed(stopme);

  nextvideo = createButton('nextvideo');
  nextvideo.id("nextvideo")
  nextvideo.mousePressed(next);
}

function playme() {
  myVideo.play();
  myVideo.volume = 0; 
}

function stopme() {
  myVideo.pause();
  myVideo.volume = 0; 
}

function next(){
  counter++ 

  if (counter > vids.length - 1) {
    counter = 0
  }

  myVideo.src = "Loupe/" + vids[counter];
  myVideo.play();
  myVideo.volume = 0; 
  // myVideo.currentTime = 3
  // myVideo.playbackRate = .2
}

function draw() {
  print(myVideo.duration)
}














// btnPlay.addEventListener('click',vidAction);
// btnPause.addEventListener('click',vidAction);
// btnStop.addEventListener('click',vidAction);
// btnNext.addEventListener('click',nextVideo);
// myVideo.addEventListener('ended',vidEnded);



// const myVideo = document.getElementById('myVideo');
// const btnPlay = document.getElementById('btnPlay');
// const btnPause = document.getElementById('btnPause');
// const btnStop = document.getElementById('timeOut');
// const timeOut = document.getElementById('vidNum');



// function vidLoad() {
//   vid.loop();
//   vid.volume(0);
// }



// function vidAction(event){
//   switch(event.target.id){
//     case "btnPlay":
//       playVideo();
//     timer = setInterval(update, 100);
//     break;
//     case "btnPause":
//       myVideo.pause();
//       myVideo.currentTime = 0;
//       break;

//   }
// }

// function playVideo(){
//     myVideo.play();
//     timer = setInterval(update, 100);
// }

// function update(){
//   timeOut.innerHTML = "Time = " =myTime(myVideo.currentTime) + "/" + myTime(myVideo.duration);

// }

// function myTime(time) {
//   var hr = ~~(time/ 3600);
//   var min =~~((time % 3600) / 60);
//   var sec = time % 60;
//   var sec_min = "";
//   if (hr > 0) {
//     sec_min += "" + hrs + ":" + (min<10 ? "0" : "");

//   }
//   sec_min += "" + min + ":" + (sec< 10 ? "0" : "");
//   sec_min += "" + Math.round(sec);
//   return sec_min;
// }

// function vidEnded(){
//   clearInterval(timer);
//   timeOut.innerHTML = "Timer: 0";
//   nextVideo();
//   playVideo();
// }

// function nextVideo(){
//   if(vidPlaying < 3){
//     vidPlaying++;
//   } else {
//     vidPlaying = 0;
//   }
//   myVideo.src = "Loupe/" + vids[vidPlaying];
//   vidNum.innerHTML = (vidPlaying+1) +"/4";

// }