let strength = 	1300.0;
let noiseScale = 0.002;
let drops = [];
let num = 20;

function preload() {
	myFont = loadFont('https://stat.neort.io/externalResource/bqj6tps3p9f48fkipv9g.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	strokeWeight(0.5);
	stroke(0, 255, 0);
	for (let i = 0; i < num; i++) {
		drops[i] = new Drop();
	}
	textFont(myFont);
	textAlign(CENTER, CENTER);
}

function draw() {
	noFill();
	background(0);
	drawNoise();
	push();
	translate(width/2, height/2);
	rotate(HALF_PI);
	drawNoise();
	pop();
	
    textSize(268);
    textFont("arial black");
    //need fix
    text("");
}