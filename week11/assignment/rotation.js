var x1 = 0, y1 = 0, x2 = 400, y2 = 400; // initial ordered pairs

function setup() {
  createCanvas(400, 400); //create the canvas
  background(0); //black background
  frameRate (10); //frame rate or speed
}

function draw() {
  stroke(100, 200, 200) //linecolor
  line(x1,y1,x2,y2) //draw line
  y1 = y1 + 8; //line change
  y2 = y2 - 8;//line change
  slope = (y2-y1)/(x2-x1); //calculate slope
  strSlope = str(round(slope,1)); //round the slope and make it into a string
  if(y1>400){ //stop loop condition
    noLoop();
     }
}
//save the canvas as an image
function mouseClicked() {
    saveCanvas('flowfield', 'png')
}