let ballNum = 40;
let ball = [];
let backgroundColor;
let circleColor;

function setup() {
	createCanvas(windowWidth, windowHeight);
	backgroundColor = pickColor();
	circleColor = pickColor();
  drawingContext.shadowBlur = 6;
  drawingContext.shadowColor = 'black';
	noStroke();
	for (let i = 0; i < ballNum; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const d = Math.random() * 150; 
		ball[i] = new Agent(x, y, d);
	}
	textSize(64);
	textAlign(CENTER);
	textFont('arial black');
}

function draw() {
	background(backgroundColor);
	fill(circleColor);

	push();
	translate(width/2, height/2);
  drawSomething(width/2);
	pop();

	fill(255);
	text("Let's Eat!", width/2, height/2);

	push();
	ball.forEach((a) => {
		a.display();
		a.update();
	});
	pop();

}

function drawSomething(r) {
	beginShape();
	for (let i = 0; i < TWO_PI;i+=radians(10)) {
    const thisNoise = noise(i * 0.003, frameCount * 0.002)
		let x = r * sin(i) * thisNoise;
    let y = r/2 * cos(i) * thisNoise;
    curveVertex(x, y);
	}
	endShape(CLOSE);
}

function pickColor() {
	let colors = ["#26A7FF", "#7828FD", "#FF5126", "#FDF028"];
	return colors[Math.floor(Math.random() * colors.length)];
}

class Agent {
	constructor(x, y, d) {
		this.vector = createVector(x, y);
		this.randomVector = p5.Vector.random2D();
		this.d = d;
		this.r = d/2;
		this.color = pickColor();
	}

	display() {
		fill(this.color);
		ellipse(this.vector.x, this.vector.y, this.d, this.d);
	}

	update() {
		this.vector.add(this.randomVector);
		if (this.vector.x + this.r < 0) {
			this.vector.x = width + this.r;
		} else if (this.vector.x - this.r > width) {
			this.vector.x = -this.r;
		}

		if (this.vector.y + this.r < 0) {
			this.vector.y = height + this.r;
		} else if (this.vector.y - this.r > height) {
			this.vector.y = -this.r;
		}
	}
}
