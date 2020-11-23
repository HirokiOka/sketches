let x1, y1;
let x2, y2;
let noiseFactor;
let xnoise, ynoise;
let xstart;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  blendMode(SCREEN);
  noLoop();
  xstart = random(10);
  ynoise = random(10);
}

function draw() {
  translate(width/2, height/2);

  for(let j = 1; j < height; j+=5) {
    xnoise = xstart;
    ynoise += 0.02;
    for(let i = 1; i < width; i+=5) {
      xnoise += 0.02;
      noiseFactor = noise(xnoise, ynoise);
      x1 = (i-1) * noiseFactor;
      y1 = (j-1) * noiseFactor;
      x2 = i * noiseFactor;
      y2 = j * noiseFactor;
      let w = map(i, 1, width, 0.01, 4);
      strokeWeight(w);
      stroke(random(180, 260), 80, 80, 80);
      line(x1, y1, x2, y2);
      rotate(0.004);
    }
  }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
    initCamera();
}