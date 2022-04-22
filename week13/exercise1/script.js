
function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    translate(width/2, height/2)

    for ( var i = 0; i < 360; i++) {
        push()
        rotate(sin(frameCount + i) * 100)

        var r = map(sin(frameCount), -1, 1, 50, 255)
        var g = map(cos(frameCount/2), -1, 1, 50, 255)
        var b = map(sin(frameCount/4), -1, 1, 50, 255)
        stroke(r,g,b)
        rect(0, 600 - i * 3, 600 - i * 3, 200 - i)
        pop()
    }
}