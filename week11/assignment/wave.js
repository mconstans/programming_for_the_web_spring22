var col = 8;
var row = 8;

function setup() {
    createCanvas(400, 400);
  }
  function draw() {
    background(50);

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            var x = (i * 50 + 25) + sin(frameCount/10) * 20
            var y = j * 50 + 25
            var d = 50

            var r = map(i, 0, 7, 0, 255)
            var g = map(i, 0, 7, 255, 0)
            var b = map(j, 0, 7, 0, 255)
            fill(r, g, b)
            ellipse(x, y, d)
        }
    }
  }