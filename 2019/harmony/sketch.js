const num = 300;
let walker = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  class Walker {
    constructor() {
      this.position = createVector(width/2, height/2);
    }

    draw() {
      for(let i = 0; i < 10; i++) {
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.position.add(this.velocity);
        stroke(0, 40);
        point(this.position.x, this.position.y);
      }
    }
  }
  for (let i = 0; i < num; i++) {
    walker[i] = new Walker();
  }
  bg();
  stroke(0, 60);
  cocoon(width/2, height/2, 170);
}

function draw() {
  for (let i = 0; i < num; i++) {
    walker[i].draw();
  }
}


function cocoon(x, y, r) {
  
  for (let i = 0; i < 1500; i++) {
    let angle1 = random(0, TWO_PI);
    let xpos1 = x + r * cos(angle1);
    let ypos1 = y + r * sin(angle1);
  
    let angle2 = random(0, TWO_PI);
    let xpos2 = x + r * cos(angle2);
    let ypos2 = y + r * sin(angle2);
    strokeWeight(noise(1));
    line(xpos1, ypos1, xpos2, ypos2);
  }
}


function bg() {
  background(0, 40);
  stroke(255);
  for (let j = 0; j < height; j+=2) {
    for (let i = 0; i <width; i+=2) {
      strokeWeight(random(3));
      point(i, j);
    }
  }
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
    initCamera();
}