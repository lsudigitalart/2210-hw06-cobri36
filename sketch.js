let imgWigg1, randomMike, imgMike, imgPlaceX, imgPlaceY, pressed, imgLakes, imgCreek, imgWigg2;

function preload() {
  // Load your new images
  imgWigg1 = loadImage("Wigg1.jpg");
  imgWigg2 = loadImage("Wigg2.jpg");
  imgMike = loadImage("Mike.png");
  imgLakes = loadImage("Lakes.gif");
  imgCreek = loadImage("Creek.gif");
  pressed = false;
}

function setup() {
  createCanvas(400, 400);
  randomMike = round(random());  // Randomize Mike
  print(randomMike);
}

function draw() {
  background(220);
  
  // Display "Lakes" GIF
  image(imgLakes, 0, 0, 100, 100);  // Adjust size as needed
  
  // Display "Creek" GIF
  image(imgCreek, 100, 0, 100, 100);  // Adjust size as needed
  
  // Display Wigg1 image when mouse is pressed
  if (pressed) {
    image(imgWigg1, imgPlaceX, imgPlaceY, 1268 / 4, 2016 / 4);  // Maintain aspect ratio for Wigg1
  }

  // Randomize display of Mike or Wigg2
  if (randomMike) {
    image(imgMike, 0, height / 2, 1386 / 4, 1018 / 4);  // Maintain aspect ratio for Mike
  } else {
    image(imgWigg2, 0, height / 2, 1512 / 4, 2016 / 4);  // Maintain aspect ratio for Wigg2
  }
}

function mousePressed() {
  // Place Wigg1 at the mouse position when clicked
  imgPlaceX = mouseX;
  imgPlaceY = mouseY;
  pressed = true;
  print("prayin");
}
