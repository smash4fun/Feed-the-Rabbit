var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png")
  leavesImg = loadImage("orangeLeaf.png")
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

function SpawnApples(){
//  var select_sprites = Math.round(random(1,2))
     if (frameCount % 80 == 0) {
      var apples = createSprite(10,5,30,10)
      apples.x = Math.round(random(50,100)) 
      apples.addImage(applesImg)
      apples.velocityY = 5
      apples.scale = 0.05
 
     }}
  

  function SpawnLeaves(){

    if (frameCount % 50 == 0) {
      var leaves = createSprite(10,5,30,10)
      leaves.x = Math.round(random(50,350)) 
      leaves.addImage(leavesImg)
      leaves.velocityY = 5
      leaves.scale = 0.05
    }
    }
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX
  

  SpawnApples()
  SpawnLeaves()
  drawSprites()
}
