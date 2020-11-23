let t;
let col1, col2;
let stars = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	t = random(10);
	for (let i = 0; i < 50; i++) {
		stars[i] = new Star(random(-width/2, width/2), random(-height/2, height/2), random(10), random(5));
	}
}

function draw() {
	let colorFactor = abs(sin(frameCount * 0.008)) * 255
	col1 = color(colorFactor);
	col2 = color(0);
	background(255 - colorFactor);
	stroke(255);
	translate(width/2, height/2);
	

	stars.forEach((s) => {
		s.display();
		s.update();
	});
	strokeWeight(1);
	for (let j = -height * 1/2; j < height * 1/2; j+=10) {
		beginShape();
		for (let i = -width * 1/2; i < width * 1/2; i+=10) {
			let x = i * noise(i * 0.002, j * 0.002, t);
			let y = j * noise(i * 0.002, j * 0.002, t);
			curveVertex(x, y);
		}
		endShape();
	}
	noStroke();
	gridCircle(0, 0, 200, col1, col2);
	t+=0.01;
}

function gridCircle(x, y, d, from, to) {
	let c = 100;
	for (let i = 0; i < c; i++) {
		let col = lerpColor(from, to, i/c);
		let a = lerp(PI, 0, i/c);
		fill(col);
		arc(x, y, d, d, -a, a, CHORD);
	}
}

class Star {
	constructor(x, y, v, s) {
		this.x = x;
		this.y = y;
		this.v = v;
		this.s = s;
	}

	display() {
		strokeWeight(this.s);
		point(this.x, this.y);
	}

	update() {
		this.x += this.v;
		if (this.x > width/2) {
			this.x = -width/2;
		}
	}
}