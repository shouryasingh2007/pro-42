function preload(){
 spacecraft1.loadImage("spacecraft1.png");
 spacecraft2.loadImage("spacecraft2.png");
 spacecraft3.loadImage("spacecraft3.png");
 spacecraft4.loadImage("spacecraft4.png");
 iss.loadImage("iss.png");
 bgimg.loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage("iss");
  spacecraft = createSprite(350,150,50,50);
  spacecraft.addImage("spacecraft1");
}

function draw() {
  background(bgimg);  
  drawSprites();
}