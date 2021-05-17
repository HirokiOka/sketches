const segmenter = new TinySegmenter();
let japaneseText;
let tokens = [];

function preload() {
  japaneseText = loadStrings('something.txt');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(200);
  stroke(0);
  textAlign(CENTER);

  japaneseText.forEach((jt) => {
    let words = segmenter.segment(jt);
    words.forEach((w) => {
      if (w == '、' || w == '。' || w == 'の') return;
      let thisX = random(windowWidth);
      let thisY = random(windowHeight);
      let thisAng = random(10);
      tokens.push(new Token(w, thisX, thisY, thisAng));
    });
  });

}

function draw() {
  background(200);
  tokens.forEach((t, i) => {
    if (i > 30) return;
    t.draw();
    t.update();
  });
}

class Token {
  constructor(t, x, y, ang) {
    this.t = t;
    this.size = random(32, 124);
    this.x = x;
    this.y = y;
    this.angle = ang;
    this.speed = random(10);
  }

  draw() {
    push();
    translate(this.x, this.y);
    textSize(this.size);
    rotate(this.angle);
    text(this.t, 0, 0);
    pop();
  }

  update() {
    this.y += this.speed;
    if (this.y - this.size/2 > windowHeight) {
      this.y = -100;
    }
    this.angle += 0.01; 
  }
}
