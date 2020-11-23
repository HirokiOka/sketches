let h = "仏説摩訶般若波羅蜜多心経観自在菩薩行深般若波羅蜜多時照見五蘊皆空度一切苦厄舎利子色不異空空不異色色即是空空即是色受想行識亦復如是舎利子是諸法空相不生不滅不垢不浄不増不減是故空中無色無受想行識無眼耳鼻舌身意、無色声香味触法無眼界乃至無意識界無無明亦無無明尽乃至無老死亦無老死尽無苦集滅道無智亦無得以無所得故菩提薩埵依般若波羅蜜多故心無罣礙無罣礙故無有恐怖遠離一切顛倒夢想究竟涅槃三世諸仏依般若波羅蜜多故得阿耨多羅三藐三菩提故知般若波羅蜜多是大神呪是大明呪是無上呪是無等等呪能除一切苦真実不虚故説般若波羅蜜多呪即説呪曰羯諦羯諦波羅羯諦波羅僧羯諦菩提薩婆訶般若心経";
let ot = 0;
let et = 0;
let index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont("游明朝体");
  textSize(18);
  // noLoop();
}

function draw() {
  index = 0;
  let diff = frameCount * 0.02;
  let bg = sin(diff) * 255;
  background(bg);
  translate(width/2, height/2);
  fill(255-bg);
  circle(0, 0, 140);
  colorMode(HSB, 360, 100, 100, 100);
  fill((frameCount * 10) % 360, 100, 100, 100);
  textSize(18);
  text("𝙁𝙚𝙚𝙡 𝙎𝙤 𝙂𝙤𝙤𝙙...", 0, 0);
  textSize(30);
  text("🐬", 0, -30);
  colorMode(RGB, 255);
  
  for (let layer = 1; layer < 8; layer++) {
      for (let i = 0; i < TWO_PI; i+=radians(20)) {
        let x, y, r, theta;
        let size = layer * 19;
        if (layer % 2 === 0) {
          theta = et+i;
          r = layer * 80 + 40;
          x = r * cos(theta);
          y = r * sin(theta);
        } else {
          theta = ot+i;
          r = layer * 80 + 40;
          x = r * cos(theta);
          y = r * sin(theta);
        }
        fill(255-bg);
        push();
        translate(x, y);
        rotate(theta+HALF_PI);
        circle(0, 0, size);
        fill(bg);
        textSize(size);
        text(h[index], 0, 0);
        pop();
        index = (index + 1) % h.length;
    }
  }
  ot+=0.01;
  et-=0.01;
}