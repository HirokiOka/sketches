let xstart;
let xnoise;
let ynoise;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xstart = random(10);
  xnoise = xstart;
  ynoise = random(10);
}

function draw() {
  background(250);
  translate(width/2, height/2);
  for (let j = -height/3; j <= height/3; j+=3) {
    ynoise += 0.0003;
    xnoise = xstart;
    for (let i = -width/3; i <= width/3; i+=3) {
      xnoise += 0.0003;
      let noiseFactor = noise(xnoise, ynoise);
      point(i * noiseFactor, j * noiseFactor);
    }
  }
}