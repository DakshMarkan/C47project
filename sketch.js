var WAIT = 0;
var PLAY = 1;
var gameState = WAIT;
var backgroundImg, tankImg, enemyTankImg, runningSoldierImg, crawlingSoldierImg, playButtonImg, screen2Img, point4875;
var bk;
var form;
var game;
var playButton;
var tank;
var heading;


function preload(){
  backgroundImg = loadImage("Images/background.jpg");
  tankImg = loadImage("Images/tank.png");
  playButtonImg = loadImage("Images/play.png");
  screen2Img = loadImage("Images/Screen2.avif");
  point4875 = loadImage("Images/Point 4875.jpeg");
  runningSoldierImg = loadImage("Images/RunningSoldier.gif");
  crawlingSoldierImg = loadImage("Images/CrawlingSoldier.png");
}

function setup() {
 canvas = createCanvas(1200,700);
  playButton = createSprite(200,100);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.4;

  soldiersGroup = new Group();
  soldiers2Group = new Group();
  soldiers3Group = new Group();

}

function draw() {
  background(backgroundImg); 

  if(mousePressedOver(playButton)){
    MoveToScreen();
  }

  if(gameState==PLAY){
    background(screen2Img);
    tank = createSprite(150,350);
    tank.addImage(tankImg);
    tank.scale = 0.4;

    heading = createSprite(600,30);
    heading.addImage(point4875);
    heading.scale = 2;

    spawnSoldiers();
    spawnSoldiers2();
    spawnSoldiers3();
  }

  drawSprites();
}

function MoveToScreen(){
  gameState = PLAY;
  playButton.visible = false;
  
}


function spawnSoldiers(){
  if (frameCount % 60 === 0){
    var soldier = createSprite(1200,165,10,40);
    soldier.velocityX = -4.3;
 
    
     // //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: soldier.addImage(runningSoldierImg);
               break;
       case 2: soldier.addImage(crawlingSoldierImg);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     soldier.scale = 0.5;
     soldier.lifetime = 300;
    
    //adding obstacles to the group
    soldiersGroup.add(soldier);
  }
 }

 function spawnSoldiers2(){
  if (frameCount % 60 === 0){
    var soldier = createSprite(1200,430,10,40);
    soldier.velocityX = -4;
 
    
     // //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: soldier.addImage(runningSoldierImg);
               break;
       case 2: soldier.addImage(crawlingSoldierImg);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     soldier.scale = 0.5;
     soldier.lifetime = 300;
    
    //adding obstacles to the group
    soldiers2Group.add(soldier);
  }
 }

 function spawnSoldiers3(){
  if (frameCount % 60 === 0){
    var soldier = createSprite(1200,630,10,40);
    soldier.velocityX = -4.7;
 
    
     // //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: soldier.addImage(runningSoldierImg);
               break;
       case 2: soldier.addImage(crawlingSoldierImg);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     soldier.scale = 0.5;
     soldier.lifetime = 300;
    
    //adding obstacles to the group
    soldiers3Group.add(soldier);
  }
 }