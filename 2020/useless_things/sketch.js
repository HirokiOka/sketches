let words = [];
let things = ["Play", "Love", "Eat", "Break", "Cut", "Draw", "Drink", "Forget", "Grow", "Hide", "Learn", "Run", "Think", "Cry", "Laugh", "Come", "Greet", "Sleep", "Fear", "Feel", "Sit", "Know", "Scream", "Sing", "Try", "Piss"];

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont('Times new Roman');
	for (let i = 0; i < things.length; i++) {
		words[i] = new Word(things[i].toUpperCase(), random(width), random(height), random(30, 150), random(1, 3));
	}
}

function draw() {
	background(0);
	words.forEach((w) => {
		w.draw();
		w.update();
	});
}

class Word {
	constructor(text, x, y, maxTextSize, v) {
		this.vector = random(1) > 1/2 ? 0 : 1;
		if (this.vector === 0) {
			this.text = text;
		} else {
			let newText = '';
			for (let i = 0; i < text.length; i++) {
				newText += text[i] + '\n';
			}
			this.text = newText;
		}
		
		this.x = x;
		this.y = y;
		this.randomness = random(1) * 0.03;
		this.color = 0;
		this.interval = 500;
		this.maxTextSize = maxTextSize;
		this.velocity = v;
		
	}

	draw() {
		fill(this.color);
		textSize(this.maxTextSize);
		text(this.text, this.x, this.y);
	}

	update() {
		if (this.vector === 0) {
			this.x -= this.velocity;
			if (this.x + this.interval < 0) {
				this.x = width;
			}
		} else {
			this.y -= this.velocity;
			if (this.y + this.interval < 0) {
				this.y = height;
			}
		}
		this.color = abs(sin(frameCount * this.randomness)) * 255;
	}
}