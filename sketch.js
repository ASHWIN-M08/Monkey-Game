// Global variables for the program
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;

//to declare the score 
var score;

// to declare the survival time
var survivalTime=0;

function preload(){
  
  //loading the animation of the monkey walking
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  // loading the images of the bananas and the rocks
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  // creating monkey and adding animation
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
  
  
// creating the ground 
ground=createSprite(400,350,900,10);
//ground.velocityX=-4;
//ground.x=ground.width /2;
console.log(ground.x);
  
  //to make the groups
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}


function draw() {

//to make the canvas and the background color
createCanvas(600,600);
background("white");
  
// to make the monkey jump
if(keyDown("space")){
 monkey.velocityY=-8;

}
  
// monkey's gravity 
monkey.velocityY = monkey.velocityY + 0.8
  

// food group and obstacle group
food();
obstacles();
  
  
  
//to make the monkey collide with the ground
monkey.collide(ground);
  
  
//to increase the score when touching the bananas
if(monkey.isTouching(bananaGroup)){

score=score+1;
}
  
//the text and survival time format
stroke("white");
textSize(20);
fill("black");
text("score:"+score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+survivalTime,100,50);
  
  
  //to display ths sprites
  drawSprites();
}

// to create the bananas/food
function food() {
  if(World.frameCount % 80 === 0) {
    banana = createSprite(600,random(120,200),50,50);
    banana.scale = 0.1;
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 130;
    bananaGroup.add(banana);
  }
}

// to make the rocks/obstacles
function obstacles() {
  if(World.frameCount % 200 === 0){
    var obstacle = createSprite(500,340,50,50);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.13;
    obstacle.velocityX = -4;
    obstacle.lifetime = 130;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}




