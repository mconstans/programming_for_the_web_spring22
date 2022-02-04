function setup () {
    createCanvas(800,800);
}

function makeTile (originX, originY, squareFill, backgroundFill, lineFill, line2Fill, diamondFill, innerWeight) {
    translate(originX, originY);
    stroke(lineFill); //default stroke color
    strokeWeight(5);
    fill(squareFill); //stone fill
    rect(0, 0, 200, 200);
    fill(backgroundFill); //forest MediumAquamarine fill
    quad(100, 50, 150, 100, 100, 150, 50, 100); //outer diamond
    triangle(0, 0, 0, 50, 50, 0); //UL triangle
    triangle(150, 0, 200, 0, 200, 50); //UR triangle
    triangle(0, 200, 0, 150, 50, 200); //LL triangle
    triangle(200, 200, 150, 200, 200, 150); //UR triangle
    line(0, 100, 50, 100);
    line(150, 100, 200, 100);
    line(100, 150, 100, 200);
    line (100, 0, 100, 50);
    fill(diamondFill); //inner diamond fill
    stroke(line2Fill); //2 line fill color
    strokeWeight(innerWeight);
    quad(100, 75, 125, 100, 100, 125, 75, 100); //inner diamond
    
}

function draw () {
    makeTile(0, 0, 'MediumAquamarine', 'AquaMarine', 'NavajoWhite', 'NavajoWhite', 'coral', ''); //1
    makeTile(0, 200, 'cadetblue', 'AquaMarine', 'NavajoWhite', 'coral', 'cornSilk', '10'); //2
    makeTile(0, 200, 'MediumAquamarine', 'AquaMarine', 'NavajoWhite', 'NavajoWhite', 'coral', ''); //3
    makeTile(200, -400, 'cadetblue', 'AquaMarine', 'NavajoWhite', 'coral', 'cornSilk', '10'); //4
    makeTile(0, 200, 'MediumAquamarine', 'AquaMarine', 'NavajoWhite', 'NavajoWhite', 'coral', ''); //5
    makeTile(0, 200, 'cadetblue', 'AquaMarine', 'NavajoWhite', 'coral', 'cornSilk', '10'); //6
    makeTile(200, -400, 'MediumAquamarine', 'AquaMarine', 'NavajoWhite', 'NavajoWhite', 'coral', ''); //7
    makeTile(0, 200, 'cadetblue', 'AquaMarine', 'NavajoWhite', 'coral', 'cornSilk', '10'); //8
    makeTile(0, 200, 'MediumAquamarine', 'AquaMarine', 'NavajoWhite', 'NavajoWhite', 'coral', ''); //9
    makeTile(200, -400, 'cadetblue', 'AquaMarine', 'NavajoWhite', 'coral', 'cornSilk', '10'); //10
    makeTile(0, 200, 'MediumAquamarine', 'AquaMarine', 'NavajoWhite', 'NavajoWhite', 'coral', ''); //11
    makeTile(0, 200, 'cadetblue', 'AquaMarine', 'NavajoWhite', 'coral', 'cornSilk', '10'); //12
}