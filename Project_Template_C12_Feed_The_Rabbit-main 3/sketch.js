var garden,rabbit;
var gardenImg,rabbitImg;
var oranges,orangesImage,applesImage,apples,leavesImage,leaves;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangesImage = loadImage("orangeLeaf.png");
  applesImage = loadImage("apple.png");
  leavesImage = loadImage("leaf.png");
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
  var options=Math.round(random(1,3))
  var remainder = frameCount%100
  if (remainder==0){ 
    if(options==1) { 
      apple()
    }
    else if (options==2) { 
      orange()
    }
    else if(options==3) { 
      leave()
    }
  }
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function apple() { 
  apples=createSprite(random(40,360),0,10,10);
  apples.addImage(applesImage);
  apples.scale=0.07;
  apples.velocityY=5
  apples.lifetime=80
  
  }
  
  function orange() { 
    oranges=createSprite(random(40,360),0,10,10);
    oranges.addImage(orangesImage);
    oranges.scale=0.07;
    oranges.velocityY=5
    oranges.lifetime=80
    
  }
  
  function leave() { 
    leaves=createSprite(random(40,360),0,10,10);
    leaves.addImage(leavesImage);
    leaves.scale=0.07;
    leaves.velocityY=5
    leaves.lifetime=80
    
  }
  