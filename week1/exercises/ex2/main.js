const diameter = window.prompt('Specify the number of pixels for circle diameter');
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(240, 225, 222);
    frameRate(20);
}
function draw() {
    if (mouseIsPressed) {
        fill(29, 77, 89);
    } else {
        strokeWeight(3);
        stroke(247, 201, 182);
        fill(109, 204, 209);
    }
    ellipse (mouseX, mouseY, diameter);
}
