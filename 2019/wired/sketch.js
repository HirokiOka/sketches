let xnoise, ynoise;
let xstart;
let noiseFactor;
let x, y, z;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  stroke(255);
  noLoop();
  ynoise = random(100);
  xstart = random(100);
  fill(20, 10);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  
  strokeWeight(0.3);
  for(let j = -height/2; j < height/2; j+=10) {
    xnoise = xstart;
    ynoise += 0.02;
    beginShape();
    vertex(0, j);
    for(let i = -width/2; i < width/2; i+=10) {
      xnoise += 0.02;
      noiseFactor = noise(xnoise, ynoise);
      x =  i * noiseFactor;
      y = j * noiseFactor;
      rotate(0.5);
      curveVertex(x, y);
      
    }
    endShape(CLOSE);
    
  }
}