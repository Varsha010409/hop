var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function draw() {
  background(0);

  rabbit.x=World.mouseX

   edegs = createEdgeSprites();
   rabbit.collide(edegs);

   drawsprites();

   var select_sprites = Math.round(random(1,3));

  
   if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
   createRed();
  }
}
}



function createApples(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150

}


function createOrange(){
  leaves = createSprite(random(0,250),40,10,10);
leaves.addImage(orangeImg);
leaves.scale = 0.08;
leaves.velocityY = 3;
leaves.lifetime = 150;
}
function createRed() {
  redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}