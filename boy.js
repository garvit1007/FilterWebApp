noseX = 0;
noseY = 0;
function preload(){
moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
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
        noseX = results[0].pose.nose.x-38;
        noseY = results[0].pose.nose.y-3;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
 image(video, 0, 0, 500, 300);
 image(moustache, noseX, noseY, 80, 30)
}

function take_snapshot_boy(){
    save('myFilterImage.png');
}