let img;
let xPos;
let xSpeed = 11;
let yPos;
let ySpeed = 11;
function preload() {
    img = loadImage('./image.png');
}

function setup() {
    createCanvas(500,300);
    xPos = 0;
    yPos = 0;
}

function draw() {
    background(145, 7, 132);
    image(img, xPos, yPos, 100, 75);
    xPos += xSpeed;
    if (xPos > 500 - 100 || xPos < 0) {
        xSpeed = xSpeed * -1;
    }
    yPos += ySpeed;
    if (yPos > 300 - 75 || yPos < 0) {
        ySpeed = ySpeed * -1;
    }
    
}