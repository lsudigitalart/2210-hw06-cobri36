let imgWigg1, randomMike, imgMike, imgPlaceX, imgPlaceY, pressed, imgLakes, imgCreek, imgWigg2, imgWigg3;
let randomWigg;

function preload() {
  // Load your new images
  imgWigg1 = loadImage("wigg1.jpg");
  imgWigg2 = loadImage("wigg2.jpg");
  imgMike = loadImage("Mike.png");
  imgWigg3 = loadImage("wigg3.jpg");

  imgLakes = createImg("lakes.gif");
  imgCreek = createImg("creek.gif");

  imgLakes.show();
  imgCreek.show();

  pressed = false; 
}

function setup() {
  createCanvas(1070, 594);
  randomMike = round(random());  // Randomize Mike
  print(randomMike);

  randomWigg =round(random()); //randomize wiggles
  print(randomWigg);

  imgLakes.position(9,9);
  imgCreek.position(540,309);
}

function draw() {
  background(255,182,193);
  
  // Randomize display of Mike or Wigg2
  if (randomMike) {
    image(imgMike, width / 15, height / 1.85, 1386 / 4, 1018 / 4);  // Maintain aspect ratio for Mike
  } else {
    image(imgWigg2, width / 15, height / 3, 1512 / 4, 2016 / 4);  // Maintain aspect ratio for Wigg2
  }

  // Display either Wigg1 or Wigg3 depending on the random value
  if (pressed) {
    if (randomWigg) {
      image(imgWigg1, imgPlaceX, imgPlaceY, 1268 / 4, 2016 / 4);  // Maintain aspect ratio for Wigg1
    } else {
      image(imgWigg3, imgPlaceX, imgPlaceY, 1512 / 4, 2016 / 4);  // Maintain aspect ratio for Wigg3
    }
  }
}

function mousePressed() 
{
  randomWigg = round(random());
  // Place Wigg1 at the mouse position when clicked
  imgPlaceX = mouseX;
  imgPlaceY = mouseY;
  pressed = true;
}