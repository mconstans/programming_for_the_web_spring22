// Scatter the triangles all over the place
let triangles = [];

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 5; i++) {
    triangles.push(new Triangle())
  }
}

function draw() {
  background(220);
  for (let i = 0; i < 5; i++) {
    triangles[i].show();
    triangles[i].move();
  }
}
class Triangle {

  constructor() {
    this.x1 = random(width);
    this.x2 = random(width);
    this.x3 = random(width);
    this.y1 = random(height);
    this.y2 = random(height);
    this.y3 = random(height);

  }
  move() {
      this.x1 = this.x1 + random(-2 + 2);
      this.x2 = this.x2 + random(-2 + 2);
      this.x3 = this.x3 + random(-2 + 2);
      this.y1 = this.y1 + random(-2);
      this.y2 = this.y2 + random(-2);
      this.y3 = this.y3 + random(-2);
  }
  show() {
    fill('green');
    triangle(this.x1, this.x2, this.x3, this.y1, this.y2, this.y3);
  }

}