let xstart;
let xnoise;
let ynoise;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(SCREEN);
  pixelDensity(2);
  noLoop();
  xstart = random(10);
  xnoise = xstart;
  ynoise = random(10);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for (let j = -height/2; j <= height/2; j+=3) {
    ynoise += 0.04;
    xnoise = xstart;
    for (let i = -width/2; i <= width/2; i+=3) {
      xnoise += 0.04;
      let noiseFactor = noise(xnoise, ynoise);
      let col = noiseFactor * 255;
      let alph = noiseFactor * 100;
      let distance = dist(i, j, 0,0) * noiseFactor;
      strokeWeight(distance%17);
      stroke(col, alph);
      point(i, j);
    }
  }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}