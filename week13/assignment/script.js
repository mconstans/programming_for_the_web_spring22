//inspired by The Code Train coding challenge #88
//also inspired by https://www.javascript.christmas/2020/16

let numFlakes = 800;  // how many snowflakes to generate

let flakes;           // list of snowflake objects
let wind;             // wind to apply to snowflakes


function setup() {
  createCanvas(1000, 800);
  noCursor();

  // create a list of Snowflake objects
  flakes = [];
  for (let i=0; i<numFlakes; i++) {
    let f = new Snowflake();
    flakes.push(f);
  }

  // make a Wind object too
  wind = new Wind();
}

function draw() {
  background(10, 10, 80);
       // Pine
       fill("green");
       triangle(150,250,300,650,0,650);
       triangle(200,300,350,700,50,700);
       triangle(800,200,950,600,650,600);
       triangle(750,250,900,650,600,650);
       //stump
       fill("brown");
       rect(170,700,50,150);
       rect(785,650,50,230);
       rect(730,650,50,230);
       //snowbank
    fill('Lavender');
    arc(100, 870, 3000, 300, 120, 0, HALF_PI);


  // update the wind's force
  wind.update();

  // go through all the snowflakes
  for (let i=0; i<flakes.length; i++) {
    let f = flakes[i];
    
    // update their position and draw them
    f.update(wind);
    f.display();

    // when flakes hit screen bottom, remove and make new
    if (f.pos.y > height + f.outerRadius) {
      flakes.splice(i, 1);  // remove one element
      flakes.push( new Snowflake() );
    }
  }
}


class Snowflake {
  
  constructor() {
    this.minDownSpeed = 0.1;    // speed of falling flake
    this.maxDownSpeed = 1.5;
    
    this.wiggleSpeed =  0.06;
    this.wiggleAngle =  random(0, TWO_PI);

    this.minPoints =    8;      // the number of points on the flake
    this.maxPoints =    12;
    this.minRadius =    2;      // overall size
    this.maxRadius =    15;

    
    // create the shape of flake and its size
    this.numPoints =   int(random(this.minPoints, this.maxPoints));
    this.outerRadius = random(this.minRadius, this.maxRadius);
    this.innerRadius = this.outerRadius / 2.0;
    
    // set the initial position offscreen
    this.pos = createVector(random(-width, width*3), random(-height,0));
    
    // set downward speed based on the size of the snowflake
    this.downSpeed = map(this.outerRadius, this.minRadius, this.maxRadius, this.maxDownSpeed, this.minDownSpeed);
    this.speed = createVector(0, this.downSpeed);
    
    // set rotation speed as they fall
    this.rotationSpeed = 0.5;
    this.rotation = 0.2;
  }
  
  update(w) {
    
    // each frame, move the snowflake down and
    // apply the wind's force to them too
    this.pos.add(this.speed);
    this.pos.add(w.force);
    
    // use the wind speed to change the overall rotation
    // (note: they rotate in the direction the wind is blowing!)
    this.rotationSpeed = map(w.force.x, -w.maxSpeed,w.maxSpeed, -3,3);
    this.rotation += radians(this.rotationSpeed);
    
    // optional: add a little wiggle to each flake's
    // downward movement
    let wiggle = sin(this.wiggleAngle) * 0.8;
    this.pos.x += wiggle;
    this.wiggleAngle += this.wiggleSpeed;
  }
  
  display() {
    
    // move the origin to the snowflake's position
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    
    // draw the snowflake shape
    fill(255, 200);
    noStroke();
    let angle = TWO_PI / this.numPoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let x = cos (a) * this.outerRadius;
      let y = sin (a) * this.outerRadius;
      vertex(x, y);

      x = cos(a+angle/2) * this.innerRadius;
      y = sin(a+angle/2) * this.innerRadius;
      vertex(x, y);
    }
    endShape(CLOSE);
    
    pop();    
  }
}


// Perlin-noise wind effect _coding train demo
class Wind {
  
  constructor() {
    this.speedInc =       0.05;    // max amt change each frame
    this.maxSpeed =       0.8;     // total max wind speed
    
    this.noiseOffset =    0;       // position in the Perlin noise
    this.noiseIncrement = 0.1;     // speed to step through the noise
    
    // computed wind force (start at 0)
    this.force = createVector(0,0);  
  }
  
  update() {
    
    // update the value from Perlin noise
    this.noiseOffset += this.noiseIncrement;
    let noiseValue = noise(this.noiseOffset);
    
    // convert the Perlin noise value (0-1) to the desired wind speed
    this.force.x += map(noiseValue, 0, 1, -this.speedInc,this.speedInc);
    
    // make sure the wind stays within the desired range
    this.force.x = constrain(this.force.x, -this.maxSpeed, this.maxSpeed);
  }
}

