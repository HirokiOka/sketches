let agentNum = 50;
let agent = [];
let backgroundColor;
let circleColor;

function setup() {
	createCanvas(windowWidth, windowHeight);
	backgroundColor = pickColor();
	circleColor = pickColor();
	drawingContext.shadowBlur = 10;
	drawingContext.shadowColor = 'black';
	noStroke();
	for (let i = 0; i < agentNum; i++) {
		agent[i] = new Agent(random(width), random(height), random(100), pickColor());
	}
	textSize(64);
	textAlign(CENTER);
	textFont('arial black');
}

function draw() {
	background(backgroundColor);
	fill(circleColor)
	push();
	translate(width/2, height/2);
	drawSomething(width/2);
	pop();
	fill(255);
	text("Let's Eat!", width/2, height/2);
	push();
	drawingContext.shadowOffsetX = 5 * sin(frameCount * 0.02);
	drawingContext.shadowOffsetY = -5 * cos(frameCount * 0.02);
	agent.forEach((a) => {
		a.display();
		a.update();
	});
	pop();

}

function drawSomething(r) {
	beginShape();
	for (let i = 0; i < TWO_PI;i+=radians(1)) {
		let x = r * sin(i) * noise(i * 0.002, frameCount * 0.002);
		let y = r/2 * cos(i) * noise(i * 0.002, frameCount * 0.002);
		curveVertex(x, y);
	}
	endShape(CLOSE);
}

function pickColor() {
	let colors = ["#26A7FF", "#7828FD", "#FF5126", "#FDF028"];
	return colors[floor(random(colors.length))];
}

class Agent {
	constructor(x, y, d, color) {
		this.vector = createVector(x, y);
		this.randomVector = p5.Vector.random2D();
		this.d = d;
		this.r = d/2;
		this.color = color;
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