
function setup() {
	createCanvas(windowWidth, windowHeight);
	img = loadImage('assets/twinkle.jpg');
	A = loadSound('assets/C4.mp3');
	S = loadSound('assets/D4.mp3');
	D = loadSound('assets/E4.mp3');
	F = loadSound('assets/F4.mp3');
	G = loadSound('assets/G4.mp3');
	H = loadSound('assets/A4.mp3');
	J = loadSound('assets/B4.mp3');
	K = loadSound('assets/C5.mp3');
	L = loadSound('assets/D5.mp3');
	W = loadSound('assets/Db4.mp3');
	E = loadSound('assets/Eb4.mp3');
	T = loadSound('assets/Gb4.mp3');
	Y = loadSound('assets/Ab4.mp3');
	U = loadSound('assets/Bb4.mp3');
	O = loadSound('assets/Db5.mp3');
  }
  function draw() {
  background(220, 30);
  image(img, 250, 60);
  //White keys
  stroke(0);
  if (key === 'a') {
	// If the 'a' key is presed, set fill color to 'red'
	fill('red');
	rect(0, 400, 100, 300);
  } else {
	fill('white');
	rect(0, 400, 100, 300);
  }
  if (key === 's') {
	fill('red');
	rect(100, 400, 100, 300);
  } else {
	fill('white');
	rect(100, 400, 100, 300);
  }
  if (key === 'd') {
	fill('red');
	rect(200, 400, 100, 300);
  } else {
	fill('white');
	rect(200, 400, 100, 300);
  }
  if (key === 'f') {
	fill('red');
	rect(300, 400, 100, 300);
  } else {
	fill('white');
	rect(300, 400, 100, 300);
  }
  if (key === 'g') {
	fill('red');
	rect(400, 400, 100, 300);
  } else {
	fill('white');
	rect(400, 400, 100, 300);
  }
  if (key === 'h') {
	fill('red');
	rect(500, 400, 100, 300);
  } else {
	fill('white');
	rect(500, 400, 100, 300);
  }
  if (key === 'j') {
	fill('red');
	rect(600, 400, 100, 300);
  } else {
	fill('white');
	rect(600, 400, 100, 300);
  }
  if (key === 'k') {
	fill('red');
	rect(700, 400, 100, 300);
  } else {
	fill('white');
	rect(700, 400, 100, 300);
  }
  if (key === 'l') {
	fill('red');
	rect(800, 400, 100, 300);
  } else {
	fill('white');
	rect(800, 400, 100, 300);
  }
  
  //Black keys
  if (key === 'w') {
	fill('red');
	rect(75,400,50,200);
  } else {
	fill('black');
	rect(75,400,50,200);
  }
  if (key === 'e') {
	fill('red');
	rect(175,400,50,200);
  } else {
	fill('black');
	rect(175,400,50,200);
  }
  if (key === 't') {
	fill('red');
	rect(375,400,50,200);
  } else {
	fill('black');
	rect(375,400,50,200);
  }
  if (key === 'y') {
	fill('red');
	rect(475,400,50,200);
  } else {
	fill('black');
	rect(475,400,50,200);
  }
  if (key === 'u') {
	fill('red');
	rect(575,400,50,200);
  } else {
	fill('black');
	rect(575,400,50,200);
  }
  if (key === 'o') {
	fill('red');
	rect(775,400,50,200);
  } else {
	fill('black');
	rect(775,400,50,200);
  }
  fill(0);
//   rect(75,400,50,200);
//   rect(175,400,50,200);
//   rect(375,400,50,200);
//   rect(475,400,50,200);
//   rect(575,400,50,200);
//   rect(775,400,50,200);
  
  //Letters on piano
  textSize(32);
  textAlign(RIGHT);
  text('A', 60, 680);
  text('S', 160, 680);
  text('D', 260, 680);
  text('F', 360, 680);
  text('G', 460, 680);
  text('H', 560, 680);
  text('J', 660, 680);
  text('K', 760, 680);
  text('L', 860, 680);
  //white letter
  fill(255);
  text('W', 110, 580);
  text('E', 210, 580);
  text('T', 410, 580);
  text('Y', 510, 580);
  text('U', 610, 580);
  text('O', 810, 580);

  textSize(20);
  noStroke();
  fill(0);
  text("Megan's Digital Piano", 530, 40);
  text("Press the letter corresponding to the key on the keyboard to compose", 700, 390);

  }
  
  function keyPressed() {
	  if (key === 'a') {
		  A.play();
		} 
		if (key === 's') {
			S.play();
		  }
		  if (key === 'd') {
			D.play();
		  } 
		  if (key === 'f') {
			F.play();
		  } 
		  if (key === 'g') {
			G.play();
		  } 
		  if (key === 'h') {
			H.play();
		  } 
		  if (key === 'j') {
			J.play();
		  } 
		  if (key === 'k') {
			K.play();
		  } 
		  if (key === 'l') {
			L.play();
		  } 
		  if (key === 'w') {
			W.play();
		  } 
		  if (key === 'e') {
			E.play();
		  } 
		  if (key === 't') {
			T.play();
		  } 
		  if (key === 'y') {
			Y.play();
		  } 
		  if (key === 'u') {
			U.play();
		  } 
		  if (key === 'o') {
			O.play();
		  }
	}
  // .stop will restart sound when released, .pause will allow song to resume upon key release
	function keyReleased() {
	  if (key === 'a') {
		  A.stop();
		} 
		if (key === 's') {
		  S.stop();
		} 
	  if (key === 'd') {
		  D.stop();
		}
		if (key === 'f') {
			F.stop();
		  } 
		  if (key === 'g') {
			G.stop();
		  } 
		  if (key === 'h') {
			H.stop();
		  } 
		  if (key === 'j') {
			J.stop();
		  } 
		  if (key === 'k') {
			K.stop();
		  } 
		  if (key === 'l') {
			L.stop();
		  }
		  if (key === 'w') {
			W.stop();
		  } 
		  if (key === 'e') {
			E.stop();
		  } 
		  if (key === 't') {
			T.stop();
		  } 
		  if (key === 'y') {
			Y.stop();
		  } 
		  if (key === 'u') {
			U.stop();
		  } 
		  if (key === 'o') {
			O.stop();
		  }  
	}