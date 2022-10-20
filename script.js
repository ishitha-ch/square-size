function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw() {
    background("#66b3b3");
}

function modelLoaded() {
    console.log("posenet is initialized");

}
function gotPoses(results){
if(results.length > 0) {
    console.log(results);
}}

noseX=0;
noseY=0;
difference=0;
rightwristx=0;
leftwristx=0;


function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+ noseX+ "noseY= "+noseY);

        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("leftWrist= "+ leftwristx+ "rightWrist= "+rightwristx+ "difference= "+difference);

    }
}

function draw() {
    document.getElementById("square_side").innerHTML="Width and height of the square will be: "+difference+"px";
    
    background('#969a97');
    fill('#f90093');
    stroke('#f90093')
    square(noseX,noseY,difference);

}

