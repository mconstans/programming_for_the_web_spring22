let grid = undefined;
let stroke1 = prompt("enter a basic color in lowercase", "black");
let stroke2 = prompt("enter another basic color for Mr. Snowman's hat & scarf", "green");
function setup() {
    createCanvas(1000, 800);
    background("#BEDEE5");
}
function draw() {
      // Pine
      fill("green");
      triangle(150,250,300,650,0,650);
      triangle(200,300,350,700,50,700);
      triangle(800,200,950,600,650,600);
      triangle(750,250,900,650,600,650);
      //stump
      fill("brown");
      rect(170,700,50,50);
      rect(730,650,50,50);
    
     //hat body
     fill(stroke2);
     ellipse(500,100, 120);
     strokeWeight(50);
    //snowman fill
    fill("#f1f1f1");
    stroke (stroke1);
    // arms
    stroke(0);
    strokeWeight(10);
    line(600, 350, 700, 200);
    line(300, 200, 500, 500);
    //lower body
    ellipse(500, 600, 400);
    //main body
    ellipse(500, 400, 300);
    //head
    ellipse(500, 200, 200);
     //buttons
     stroke(0);
     strokeWeight(25);
     point(500, 400);
     point(500, 500);
     point(500, 600);
    //scarf
    stroke(stroke2);
    strokeWeight(40);
    line(420, 300, 580, 300);
    triangle(400, 292, 550, 610, 600, 625);
    //hat brim
    strokeWeight(40);
    line(420, 115, 580, 115);
    //eyes
    strokeWeight(40);
    point(425, 200);
    point(575, 200);
    //mouth
    strokeWeight(10);
    arc(500, 220, 50, 50, 0, PI);
    //sun
    fill("yellow");
    noStroke();
    ellipse(100,100, 120);
   
}