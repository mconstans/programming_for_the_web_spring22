let ellipseX = 0;
let ellipseWidth = 75;
const ellipseHeight = 75;
let ellipseY;
let clickCount = 0;
let speed;

window.alert('Click the circle as fast as you can!');
function setup () {
    createCanvas(500, 500);
    ellipseY = random(height - ellipseHeight);
    speed = random(1, 3);
}

function draw () {
    background('lightSalmon');
    drawShape();
    ellipseX+= speed;
    if(ellipseX > width) {
        noLoop();
        fill('green');
        textSize(30);
        textFont('Lora');
        text('Your score was ' + clickCount, 100, 300);
    
    }
}

function mousePressed() {
    if ((mouseX >= ellipseX && mouseX <= ellipseX + ellipseWidth) && (mouseY >= ellipseY && mouseY <= ellipseY + ellipseHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape() {
    fill('goldenrod');
    ellipse(ellipseX, ellipseY, 75, 75);
}