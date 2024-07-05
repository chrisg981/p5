window.alert("This webpage has been loaded.")

function setup() {
    createCanvas(500, 300);
    background(208, 245, 244);
    
    image(img, 0, 0, 100, 75);
    fill("yellow");
    stroke("orange");
    strokeWeight(5);
    circle(width/1.25, height/4, 25);
    
    fill("black");
    stroke(0);
    rect(0, height/2, width, height/2); 
    

    fill("white");
    arc(100, 200, 50, 50, 1, 4.1);
    stroke("white");

    let z = []

    for (let x = 0; x < 15; x++) {  
     z.push(point(Math.random() * 425, 180));
     }

    fill("green");
    stroke("green");
    triangle(30, 150, 58, 100, 86, 150);
}

let bi = prompt('Enter your name: ');

function draw() {
    // Create a greeting.
    fill("black");
    
    let greeting = createGreeting(bi);
  
    // Style the text.
    textAlign(CENTER, CENTER);
    textSize(16);
  
    // Display the greeting.
    text(greeting, 50, 50);
  }
  
  // Return a string with a personalized greeting.
  function createGreeting(name) {
    let message = `Hello, ${name}!`;
    return message;
  }