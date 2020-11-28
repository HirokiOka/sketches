let img;
const min = 5;
const max = 150;
let distMax;
let p1;
let p2;
let cp;
let mp;

let d1 = max;
let d2 = max;


function preload() {
  img = loadImage('https://stat.neort.io/externalResource/bv1393k3p9f7gigecms0.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//   noLoop();
  rectMode(CENTER);
  noStroke();
  img.resize(img.width/4, img.height/4);
  p1 = createVector(width/2, height/2);
  p2 = createVector(width/2, height/2);
  img.loadPixels();
  distMax = p1.dist(createVector(0, 0));
}

function draw() {
  background(0);
  cp = createVector(width/2, height/2);
  mp = createVector(mouseX, mouseY);

  d1 = int(map(mp.dist(cp), 0, distMax, min, max));
  d2 = int(map(mp.dist(cp), 0, distMax, max, min));
  
  drawPixels(p1.x, p1.y, img.width/4, img.height/4, d1);
  drawPixels(p2.x, p2.y, img.width/4, img.height/4, d2, true);

}


function drawPixels(x, y, w, h, step, isM = false) {
  push();
  translate(x, y);
  for (let j = -h; j <= h; j+=step) {
    for (let i = -w; i <= w; i+=step) {
      let indexX = int(map(i, -w, w, 0, img.width));
      let indexY = int(map(j, -h, h, 0, img.height));
      let loc = (indexX + indexY*img.width)*4;
      let n = noise(i * 0.02, j * 0.02, frameCount * 0.09);
      let alpha = map(step, min, max, 255, 0);
      
      if (isM) {
        fill(img.pixels[loc] * n, alpha);
      } else {
        fill(img.pixels[loc] * n, img.pixels[loc+1] * n, img.pixels[loc+2] * n, img.pixels[loc+3] ,alpha);
   
      }
      
      rect(i, j, step);
    }
  }
  pop();
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}