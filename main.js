Webcam.set({
    width:250,
    height:200,
    image_format:'png',
    png_quality:90
});

 camera=document.getElementById("camera");

 Webcam.attach('#camera');

 function takeSpanShot(){
     Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
     });
 }

 console.log("ml5 version",ml5.version);

 ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/r5pYKLLph/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded");
}

