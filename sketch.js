//if an I is after a word that means it is a image variable

var monkey, monkeyRunning;
var ground;
var ban, banI, banGroup;
var obstacle, obstacleI, obstacleGroup;
var SurvialTime;
var Score = 0;

function preload(){
 banI = loadImage("banana.png");
 obstacleI = loadImage("obstacle.png");
 monkeyRunning = loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
}

function setup(){
  createCanvas(400,400);
  
 
  
  ground = createSprite(200,345,400,100);
  ground.shapeColor = "brown";
  
  monkey = createSprite(60,275,20,20);
  monkey.addAnimation("monk", monkeyRunning);
  monkey.scale = 0.15;
  
  ground.setCollider("rectangle",0,0,400,90);
  ground.debug = true;
  
  banGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw(){
  background("white");
  monkey.collide(ground);
  console.log(World.mouseY);
  console.log(World.mouseX);
  spawnBan();
  spawnObstacle();
  drawSprites();
  
  SurvialTime = Math.ceil(frameCount/frameRate());
  stroke("black");
  textSize(20);
  fill("black");
  text("SurvivalTime"+":"+ SurvialTime,20,20);
  text("Score"+":"+Score, 240,20);
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(keyDown("space") && monkey.y > 235){
    monkey.velocityY = -12;
  }
  
  if(monkey.isTouching(banGroup)){
     ban.destroy();
     Score = Score+1;
  }
}


function spawnBan(){
  if(frameCount % 80 === 0){
     ban = createSprite(390,160,40,40);
     ban.addImage("ban", banI);
     ban.velocityX = -7;
     ban.scale = 0.09;
     ban.lifetime = 80;
     banGroup.add(ban);
  }
}

function spawnObstacle(){
 if (frameCount % 180 === 0){
   var obstacle = createSprite(450,270,10,40);
   obstacle.velocityX = -7
   obstacle.addImage("ob", obstacleI);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 80;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}