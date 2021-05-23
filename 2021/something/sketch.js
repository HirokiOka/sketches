let positionX;
let positionY;
let CD;

const offset = 200;
const maxTextSize = 200;
const hours = [...Array(12).keys()].map(i => ++i); 
let hourHandDiameter; 
let handsDiameter; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  cx = width/2;
  cy = height/2;
  CD = min(windowWidth, windowHeight) / 3;
  hourHandDiameter = CD / 2;
  handsDiameter = CD * 2 / 3;
}

function draw() {
  background(0);
  drawClock(cx, cy, CD, pickFont());
}

function drawClock(positionX, positionY, clockDiameter, textFontType) {

  push();
  translate(positionX, positionY);
  fill(255);

  stroke(255);
  const sec = second();
  const h = hour();
  const m = minute();
  const secRad = map(sec, 0, 59, 0, TWO_PI) - HALF_PI;
  const hourRad = map(h, 1, 12, 0, TWO_PI) - HALF_PI;
  const minuteRad = map(m, 0, 59, 0, TWO_PI) - HALF_PI;
  strokeWeight(3);
  line(0, 0, clockDiameter * cos(secRad), clockDiameter * sin(secRad)); 
  strokeWeight(7);
  line(0, 0, handsDiameter * cos(minuteRad), handsDiameter * sin(minuteRad)); 
  strokeWeight(14);
  line(0, 0, hourHandDiameter * cos(hourRad), hourHandDiameter * sin(hourRad)); 
  noStroke();

  hours.forEach((h, i) => {
    const rad = radians(i*30) - HALF_PI + radians(30);
    const ts = maxTextSize * noise(frameCount * 0.02 ,h);
    textSize(ts);
    textFont(textFontType);
    const displayValue = h.toString();
    text(displayValue, clockDiameter * cos(rad), clockDiameter * sin(rad));
  });
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function pickFont() {
  const ff = ['sans-serif', 'arial', 'Impact', 'arial black', 'fantasy', 'Times New Roman', 'Tunga', 'Courier New'];
  return ff[floor(random(ff.length-1))];
}

