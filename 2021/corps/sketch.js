let img;
const yStep = 8;
const step = 4;

function preload() {
  img = loadImage('./corps.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  img.loadPixels();
  rectMode(CENTER);
  noStroke();
}

function draw() {
  for (let j = 0; j < img.height; j+=yStep) {
    const xStep = random() < 1/2 ? yStep*2 : yStep*10;
    for (let i = 0; i < img.width; i+=xStep) {
      const loc = (i + j * img.width) * 4;
      const alpha = abs(sin(frameCount * 0.02)) * 255;
      fill(img.pixels[loc], img.pixels[loc+1], img.pixels[loc+2], img.pixels[loc+3], alpha);
      rect(i, j, xStep, yStep);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
