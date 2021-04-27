noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);    
    console.log("canvasLoaded");
    
}
function modelLoaded(){
    console.log('poseNet Is INitialized!');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.y;
        console.log("leftWristX="+leftWristX,"rightWristX="+rightWristX);
        console.log(noseX,noseY);
        difference=floor(leftWristX-rightWristX);

    }
}
function draw(){
background('blue');
document.getElementById("square_side").innerHTML="width and height of a square will be="+difference+"px";
fill("green");
stroke("red")
square(noseX,noseY,difference);

}
