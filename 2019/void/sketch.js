let xn2, yn2;
let xn1, yn1;
let a, b, c, d, e, f;
let p;
let num = 720;
let x = new Array(num);
let y = new Array(num);
let distance;
let rad = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  pixelDensity(2);
  noLoop();
  stroke(0, 40);
  xn1 = 0;
  yn1 = 0;
  for(let i = 0; i < num; i++) {
    x[i] = rad * cos(i);
    y[i] = -rad * sin(i) * sin(i) * sin(i); 
    rad+=1;
  }
}

function draw() {
  translate(width/2, height/2);
  for(let i = 0; i < num; i++) {
    for(let j = 1; j < num; j++) {
      distance = int(dist(x[i], y[i], x[j], y[j]));
      if(distance < 100) {
        push();
        rotate(1);
        line(x[i], y[i], x[j], y[j]);
        pop();
      }
    }
  }

  drawFractale(0, -100);
  rotate(radians(30));
  drawFractale(20, 100);
 
}

function drawFractale(locx, locy) {
  push();
  translate(locx, locy+200);
   for(let i = 0; i < 200000; i++) {
    p = random(1);
    if(p <= 0.8) {
      a = 0.824074;
      b = 0.281428;
      c = -0.212346;
      d = 0.864198;
      e = -1.88229;
      f = -0.110607;
    }else{
      a = 0.088272;
      b = 0.520988;
      c = -0.463889;
      d = -0.377778;
      e = 0.785360;
      f = 8.095795;
    }
    
    xn2 = a * xn1 + b * yn1 +e;
    yn2 = c * xn1 + d * yn1 +f;

    point(-xn2 * 50, -yn2 * 50);
    
    xn1 = xn2;
    yn1 = yn2;
  }
  pop();
}