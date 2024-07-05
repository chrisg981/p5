let img = [];
let yPos = [];
let xPos = [];
function preload() {
    for (let x = 0; x <20; x++) {
        img[x] = loadImage('./rain.png');;
    }
}

function setup() {
    createCanvas(500, 300);
    for (let x = 0; x < 20; x++) {
        xPos[x] = Math.random() * 500;
        yPos[x] = Math.random() * 300;
    }
}

function draw() {
    background(173, 216, 230);
    for (let x = 0; x < 20; x++) {
    image(img[x], xPos[x], yPos[x], 50, 35);
    yPos[x] += 1;
  if (yPos[x] > 300) {
      yPos[x] = -5;
    }
  }
}


