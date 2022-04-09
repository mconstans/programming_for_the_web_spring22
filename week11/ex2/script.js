
function setup() {
    createCanvas(1080,1080);
    background(0);
}
  
function draw() {
    stroke(180, 100, 9);
    strokeWeight(.5);
    noFill();
    beginShape();
    for (let a = 0; a < 360; a += 10) {
      let x = 400 * sin(a) + 540;
      let y = 400 * cos(a) + 540;
      vertex(x, y);
    }
    endShape();   
}