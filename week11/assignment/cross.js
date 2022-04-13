var col = 10;
var row = 10;

var c_width, c_height;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB);
  noStroke();
  background(0);

  c_width = width / col;
  c_height = height / row;
}

function draw() {
  background(0, 30);
  
  for (var j = 0; j < row; j++) {
    for (var i = 0; i < col; i++) {
      push();
      translate(i * c_width + c_width / 2, j * c_height + c_height / 2);
      rotate(frameCount * 0.05);
      fill(frameCount % 360, 360, 360);
      rect(0, 0, 30, 30);
      fill(frameCount % 310, 310, 150);
      rect(0, 0, 60, 10);
      pop();
    }
  }
}
//save the canvas as an image
function mouseClicked() {
  saveCanvas('flowfield', 'png')
}