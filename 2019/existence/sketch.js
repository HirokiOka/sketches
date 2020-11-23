let num = 720;
let x = new Array(num);
let y = new Array(num);
let distance;
let rad = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  pixelDensity(2);
  noLoop();
  smooth();
  stroke(0, 40);
}

function draw() {
  for(let i = 0; i < num; i++) {
    x[i] = rad * cos(i);
    y[i] = -rad * sin(i) * sin(i) * sin(i); 
    rad+=1;
  }
  translate(width/2, height/2);
  for(let i = 0; i < num; i++) {
    for(let j = 1; j < num; j++) {
      distance = dist(x[i], y[i], x[j], y[j]);
      if(distance < 100) {
        line(x[i], y[i], x[j], y[j]);
        rotate(1);
      }
    }
  }
}
