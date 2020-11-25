let woman;
let raspberry;

function preload() {
    woman = loadImage('https://stat.neort.io/externalResource/buug08s3p9f7gigec5sg.jpg');
    raspberry = loadImage('https://stat.neort.io/externalResource/buuhtes3p9f7gigec6lg.jpg');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0);
    // noLoop();
    imageMode(CENTER);
    noStroke();
    woman.resize(woman.width/5, woman.height/5);
    raspberry.resize(raspberry.width/14, raspberry.height/14);
    push();
    translate(width/2, height/2);
    for (let i = -woman.width/2; i < woman.width/2; i+=5) {
        for (let j = -woman.height; j < woman.height/2; j+=5) {
            let x = map(i, -woman.width/2, woman.width/2, 0, woman.width);
            let y = map(j, -woman.height/2, woman.height/2, 0, woman.height);
            fill(woman.get(x, y), 128);
            rect(i, j, 5);
        }
    }
    pop();
    fill(100, 10, 10);
    rect(width/3+100, height/17, raspberry.width/2, raspberry.height);
    rectMode(CENTER);
}

function draw() {
    let d = random(10, 20);
    translate(width/3+100, height/17);
    for (let i = 0; i < raspberry.width/2; i+=d) {
        for (let j = 0; j < raspberry.height; j+=d) {
            let noiseFactor = noise(i, j);
            fill(raspberry.get(i, j), 128);
            let size = d * noiseFactor;
            rect(i, j, d);
        }
    }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}