noseX = 0;
noseY = 0;
function preload(){
lip_stick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(500,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses)
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-29;
        noseY = results[0].pose.nose.y+5;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
 image(video, 0, 0, 500, 300);
 image(lip_stick, noseX, noseY, 60, 30)
}

function take_snapshot_girl(){
    save('myFilterImage.png');
}