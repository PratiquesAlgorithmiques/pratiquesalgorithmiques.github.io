var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function speak(){
    recognition.start();
}

recognition.onresult = function(e){
    console.log(e);

    content = e.results [0][0].transcript;
    console.log(content);

    document.getElementById("textBox").innerHTML = content; 

    if(content =="hello"){
        ai_speak_whatsonurmind2day()
    }   
}

function ai_speak_whatsonurmind2day () {
    var synth = speechSynthesis;
    var speak_data = "What's on your mind today?" 
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
}
