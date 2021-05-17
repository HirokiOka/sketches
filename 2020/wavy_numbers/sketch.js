let digitFont;

const distance = 60;
const offset = 24;
const maxDigitSize = 36;
const messageSize = 64;
const messageWidth = 600;

function preload() {
  //digitFont = loadFont('https://stat.neort.io/externalResource/bqj6tps3p9f48fkipv9g.ttf');
  digitFont = loadFont('./digit-font.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
	textFont(digitFont);
}

function draw() {
  const fc = frameCount;
	const backgroundColor = abs(sin(fc * 0.006)) * 255;
  const textColor = 255 - backgroundColor;
	background(backgroundColor);
  fill(textColor);
	for (let j = offset; j < height - offset; j+=distance) {
		for (let i = offset; i < width - offset; i+=distance) {
      const x = i;
      const y = j;
      const digitSize = abs(sin(fc * (i + j) * 0.00002)) * maxDigitSize;
      const digit = floor(fc * noise(i, j) * 0.02 % 10);
      textSize(digitSize);
			text(digit, x, y);
		}
	}
  textSize(messageSize);
  rect(width/2, height/2, messageWidth + offset, messageSize + offset, 4);
  fill(backgroundColor);
  text('Hello   World', width/2, height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
