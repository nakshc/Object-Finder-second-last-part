status=""
video=""
objects= [];


function preload()  {

video=createCapture(VIDEO);
video.hide();




}



function setup()  {

canvas=createCanvas(480,380);
canvas.center();

}

function start()  {


    objectDetector= ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML= "Status:Detecting Objects"


}
function modelLoaded()  {

console.log("ModelLoaded");
status=true;

}


function gotResults()   {

    if(error) {

        console.log(error);
        
        }
        
        console.log(results);
        objects= results



}


function draw() {

image(video , 0 , 0 , 480 , 380);


if(status==true)   {

    objectDetector.detect(gotResults);

    for(i = 0; i < objects.length; i++)  {

        document.getElementById("status").innerHTML= "Status:Detected objects";
        document.getElementById("number_of_objects").innerHTML= "Object Mentioned Found";
        SpeechSynthesisUtterance(" Object Mentioned Found ");
        SpeechGrammar("speak(utterThis)")


        else(statsus)  {


       
            
        }

}

}

}