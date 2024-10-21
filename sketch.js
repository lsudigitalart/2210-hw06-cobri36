let imgWigg1, randomMike, imgMike, imgPlaceX, imgPlaceY, pressed, imgLakes, imgCreek, imgWigg2;

function preload() {
  // Load your new images
  imgWigg1 = loadImage("wigg1.jpg");
  imgWigg2 = loadImage("wigg2.jpg");
  imgMike = loadImage("Mike.png");

  imgLakes = createImg("lakes.gif");
  imgCreek = createImg("creek.gif");

  imgLakes.hide();
  imgCreek.hide();

  pressed = false; 
}

function setup() {
  createCanvas(800, 800);
  randomMike = round(random());  // Randomize Mike
  print(randomMike);

  imgLakes.position(0,0);
  imgCreek.position(100,0);
}

function draw() {
  background(220);
  


  // Randomize display of Mike or Wigg2
  if (randomMike) {
    image(imgMike, 0, height / 2, 1386 / 4, 1018 / 4);  // Maintain aspect ratio for Mike
  } else {
    image(imgWigg2, 0, height / 2, 1512 / 4, 2016 / 4);  // Maintain aspect ratio for Wigg2
  }


  // Display Wigg1 image when mouse is pressed
  if (pressed) {
    image(imgWigg1, imgPlaceX, imgPlaceY, 1268 / 4, 2016 / 4);  // Maintain aspect ratio for Wigg1
  }

}

function mousePressed() {
  // Place Wigg1 at the mouse position when clicked
  imgPlaceX = mouseX;
  imgPlaceY = mouseY;
  pressed = true;
  print("PLEASE");
}