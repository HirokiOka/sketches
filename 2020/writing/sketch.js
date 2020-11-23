let backgroundColor;
let writings = "All work and no play makes Jack a dull boy.";
let t = [];


function setup() {
  backgroundColor = color(237, 232, 187);
  textFont("Times new Roman");
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    t[i] = new Text(0, random(height), writings, random(5), random(6, 64));  
  }
}

function draw() {
  background(backgroundColor);
  for (let i = 0; i < t.length; i++) {
    t[i].draw();  
  }
}


class Text {
  constructor(x, y, letter, speed, fontSize) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.letter = letter;
    this.speed = speed;
    
  }
  
  draw() {
    textSize(this.fontSize);
    text(this.letter, this.x, this.y);
    this.x += this.speed;
    
    if(this.x > width) {
      this.x = 0;
    }
  }
}