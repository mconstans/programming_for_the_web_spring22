function setup () {
    createCanvas(200,200);
}

function makeTile () {
    translate(0, 0);
    fill(107, 100, 95); //stone fill
    rect(0, 0, 200, 200);
    fill(20, 61, 28); //forest green fill
    quad(100, 50, 150, 100, 100, 150, 50, 100); //outer diamond
    quad(100, 75, 125, 100, 100, 125, 75, 100); //inner diamond
    triangle(0, 0, 0, 50, 50, 0); //UL triangle
    triangle(150, 0, 200, 0, 200, 50); //UR triangle
    triangle(0, 200, 0, 150, 50, 200); //LL triangle
    triangle(200, 200, 150, 200, 200, 150); //UR triangle
    stroke(255);
    strokeWeight(5);
    line(0, 100, 50, 100);
    line(150, 100, 200, 100);
    line(100, 150, 100, 200);
    line (100, 0, 100, 50);
}

function draw () {
    makeTile();
}