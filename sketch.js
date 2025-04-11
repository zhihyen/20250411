let circles = [];
let morandiColors = [
  '#99C1DE', '#BCD4E6', '#D6E2E9', '#F0EFEB', '#DBE7E4',
  '#C5DEDD', '#FAD2E1', '#FDE2E4', '#FFF1E6', '#EDDCD2', '#CDB4DB'
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#c0d6df'); // Set background to #c0d6df
  
  // Generate 40 circles with random positions and colors
  let attempts = 0;
  while (circles.length < 40 && attempts < 1000) {
    let newCircle = {
      x: random(width), // Random x position
      y: random(height), // Random y position
      size: random(50, 120), // Random size between 50 and 120
      color: random(morandiColors) // Random color from the palette
    };
    
    // Check if the new circle overlaps with existing circles
    let overlapping = false;
    for (let circle of circles) {
      let distance = dist(newCircle.x, newCircle.y, circle.x, circle.y);
      if (distance < (newCircle.size + circle.size) / 2) {
        overlapping = true;
        break;
      }
    }
    
    // If not overlapping, add the circle to the array
    if (!overlapping) {
      circles.push(newCircle);
    }
    attempts++;
  }
}

function draw() {
  background('#c0d6df'); // Set background to #c0d6df in draw loop
  
  // Calculate size factor based on mouseX position
  let sizeFactor = map(mouseX, 0, width, 50, 120);
  
  // Draw circles
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor / 80);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}