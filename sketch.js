var canvas, farm;
var sticks, rocks;
var platform;
var farmer;

var gameState = "play";

var obstaclesGroup, obstacle1,obstacle2;

function preload() {
  farmImage = loadImage ("sprites/cartoon-factory.png");
  farmerImage = loadImage("sprites/farmer.png");
  platformImage = loadImage("sprites/wood.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  farm = createSprite(500,500);
  farm.addImage("farm", farmImage);
  farm.scale = 1.5;
  
  farmer = createSprite(200,200,50,50);
  farmer.addImage("farmer",farmerImage);
  farmer.scale = 0.08;

  platformsGroup = new Group();
}

function draw() {
  background("white"); 
  
   
  if(gameState === "play"){
    if(keyDown("space")) {
      farmer.velocityY = -10;
    }
    if(keyDown("left_arrow")) {
      farmer.x = farmer.x-3;
    }
    if(keyDown("right_arrow")) {
      farmer.x = farmer.x+3;
    }
    farmer.velocityY = farmer.velocityY + 0.8;
    
    if(farmImage.y>400){
      farmImage.y = 300
    }
    
  }
  
  if(gameState === "end"){
    textSize(30);
    text("Game Over",230,250);
    
  }
  drawSprites();
}


function spawnPlatform (){
    if (FrameCount % 200 === 0) {
       var platform = createSprite(100,10);

       platform.x = Math.round(random(50,450));
       platform.addImage("platform", platformImage);

       platform.velocityX = 2;

       platform.depth = farmer.depth;
       platform.depth = platform.depth + 1;

       platform.lifetime = 600;

       platformsGroup.add(platform);       
    }


}