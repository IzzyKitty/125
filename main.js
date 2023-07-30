nose_x=0
nose_y=0
left_wrist_x=0
right_wrist_x=0
difference=0

function setup(){
canvas=createCanvas(550,550)
canvas.position(560,150)
video=createCapture(VIDEO)
video.size(550,550)
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on("pose",gotPoses)
}

function modelloaded(){
console.log("model is loaded");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
nose_x=results[0].pose.nose.x
nose_y=results[0].pose.nose.y
console.log("nose_x= "+nose_x+"nose_y= "+nose_y);
left_wrist_x=results[0].pose.leftWrist.x
right_wrist_x=results[0].pose.rightWrist.x
difference=floor(left_wrist_x-right_wrist_x)
console.log("left_wrist_x= "+left_wrist_x+"right_wrist_x= "+right_wrist_x+"diffence= "+difference);
}
}

function draw(){
background("#F06292")
}

function textSize(){
fill("#8ED1FC")
stroke("#8ED1FC")
font(isabella,50,300)
}