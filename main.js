noseX = 0;
noseY = 0;
function preload() {
	clown_nose = loadImage('https://i.postimg.cc/x1KLnYfd/mustache-png-image-pngpix-6.png');
	}
function setup() {
	canvas = createCanvas(300,225);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(300,225);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	}
function modelLoaded() {
	console.log('PoseNet Initialised');
	}
function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x-25;
		noseY = results[0].pose.nose.y+5;
		console.log("nose x = "+ noseX);
		console.log("nose y = "+ noseY);
		}
	}
	
function draw() {
	image(video,0,0,300,225);
	image(clown_nose,noseX,noseY,50,15);
	}
function take_snapshot() {
	save('filterImg.png');
	}
