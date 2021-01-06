var PLAY = 1;

var END  = 0;

var gameState = PLAY;

var score = 0;


var bg, bgImg;

var bg2, bg2Img;

var item,itemImg;

var knife, knifeImg;

var fruit1,fruit1Img;

var fruit2,fruit2Img;

var fruit3,fruit3Img;

var fruit4,fruit4Img;

var alien1,alien1Img;

var alien2,alien2Img;

var over,overImg;

var cutSound;


var orangeGroup; var appleGroup; var pearGroup;
var bananaGroup; var micro1Group; var micro2Group;



function preload(){
  
  knifeImg = loadImage("sword.png");
  
  fruit1Img = loadImage("fruit1.png");
  
  fruit2Img = loadImage("fruit2.png");
  
  fruit3Img = loadImage("fruit3.png");
  
  fruit4Img = loadImage("fruit4.png");
  
  bgImg = loadImage("kitchen.jpg");
  
  alien1Img = loadImage("alien1.png");
  
  alien2Img = loadImage("alien2.png");
  
  itemImg = loadImage("space.png");
  
  overImg = loadImage("gameover.png");

  bg2Img = loadImage("kitchen2.jpg");

  cutSound = loadSound("Arrow+Swoosh+1.mp3")
  
   
 
}


function setup() {
  
  createCanvas(500,400);
  
  //bg = createSprite(250,200,600,400);
  
  //bg.addImage("kitchen",bgImg);

  bg2 = createSprite(250,200,600,400);
  
  bg2.addImage("kitchen",bg2Img);

  
  sword();
  
  orangeGroup = createGroup();
  
  appleGroup = createGroup();
 
  pearGroup = createGroup();
  
  bananaGroup = createGroup();
  
  micro1Group = createGroup();
  
  micro2Group = createGroup();
  
  
  
  
  
  
}


function draw(){
  
  background("red");
  
  
  //inst();
  

  
  
  if(orangeGroup.isTouching(knife)) {
  
    orangeGroup.destroyEach();
    
    score = score+4

    cutSound.play();
    
  }
  
  if(appleGroup.isTouching(knife)) {
  
    appleGroup.destroyEach();
    
    score = score+3

    cutSound.play();
    
  }
  
  
  if(pearGroup.isTouching(knife)) {
  
    pearGroup.destroyEach();
    
    score = score+2;

    cutSound.play();
    
  }
  
  if(bananaGroup.isTouching(knife)) {
  
    bananaGroup.destroyEach();
    
    score = score+1;

    cutSound.play();
    
  }
  
  
  
  
  
  if(gameState === PLAY) {
    
  knife.x = mouseX;
  
  knife.y = mouseY;

  
    
    
  var rand = Math.round(random(1,6));
    
    switch(rand) {
        
      case 1: orange();
              break;
      case 2: apple();
              break;
      case 3: pear();
              break;
      case 4: banana();
              break;
      case 5: dirty1();
              break; 
      case 6: dirty2();
              break;
            
    
    } 
    
    
    if(micro1Group.isTouching(knife)||micro2Group.isTouching(knife) && gameState === PLAY) {
    
    micro1Group.destroyEach();
      
    micro2Group.destroyEach();
      
    gameState = END;
    
    } 
  } 
  

   else if(gameState === END) {

    over = createSprite(230,180,20,20);
     
    over.scale = 1.3;
    
    over.addImage("gameOver",overImg)
     
    orangeGroup.setVelocityXEach(0);
     
    appleGroup.setVelocityXEach(0);
    
    pearGroup.setVelocityXEach(0);

    bananaGroup.setVelocityXEach(0);
     

 }
  
  
  
  
  
  
  
  
  
  

  drawSprites();
  
    textFont("Bold"); 
     
    textSize(20); 
     
    stroke("red");
     
    strokeWeight(5);
  
   text("SCORE : "+score,10,20);
  
  
  

}


function sword () {
  
  knife = createSprite(250,200,20,50);
  
  knife.addImage("knife",knifeImg);
  
  //knife.debug = true;
  
  knife.setCollider("circle",-30,-20);
  
  
}


function orange() {
  
  if(frameCount % 60 === 0) {
  
  fruit1 = createSprite(500,200,20,50);
  
  fruit1.y = Math.round(random(20,350));
  
  fruit1.addImage("orange",fruit1Img);
  
  fruit1.scale = 0.3;
  
  fruit1.velocityX = -10;  
    
  fruit1.lifetime =  60; 
    
  orangeGroup.add(fruit1); 
    
    
  
  }  
    
  
}

function apple() {
  
  if(frameCount % 60 === 0) {
  
  fruit2 = createSprite(500,200,20,50);
    
  fruit2.y = Math.round(random(20,350));   
  
  fruit2.addImage("apple",fruit2Img);
  
  fruit2.scale = 0.3;
    
  fruit2.velocityX = -10;  
    
  fruit2.lifetime =  60; 
    
  appleGroup.add(fruit2);  
    
    
  
  } 
    
  
}

function pear() {
  
  if(frameCount % 60 === 0) {
  
  fruit3 = createSprite(500,100,20,50);
  
  fruit3.y = Math.round(random(20,350)); 
  
  fruit3.addImage("pear",fruit3Img);
  
  fruit3.scale = 0.3;
  
  fruit3.velocityX = -10;  
    
  fruit3.lifetime =  60; 
    
  pearGroup.add(fruit3);
    
    
  
    
  } 
  
  
}

function banana() {
  
  if(frameCount % 60 === 0) {
  
  fruit4 = createSprite(500,100,20,50);
  
  fruit4.y = Math.round(random(20,350)); 
  
  fruit4.addImage("banana",fruit4Img);
  
  fruit4.scale = 0.3;  
  
  fruit4.velocityX = -10;  
    
  fruit4.lifetime =  60; 
    
  bananaGroup.add(fruit4);
    
  
    
    
  } 
  
}


function dirty1() {
  
  if(frameCount % 60 === 0) {
  
  alien1 = createSprite(500,100,20,50);
  
  alien1.y = Math.round(random(20,350)); 
  
  alien1.addImage("alien1",alien1Img);
  
  //alien1.scale = 0.3;  
  
  alien1.velocityX = -10;  
    
  alien1.lifetime =  60; 
    
  micro1Group.add(alien1);

  }
  

}

function dirty2() {
  
  if(frameCount % 60 === 0) {
  
  alien2 = createSprite(500,100,20,50);
  
  alien2.y = Math.round(random(20,350)); 
  
  alien2.addImage("alien2",alien2Img);
  
  //alien2.scale = 0.3;  
  
  alien2.velocityX = -10;  
    
  alien2.lifetime =  60; 
    
  micro2Group.add(alien2);

  }
  

}


/*function inst() {
  
    item = createSprite(180,50,20,20);
    
    item.addImage("space to start",itemImg);
    
    item.scale = 0.3;
  
} */


