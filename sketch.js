var jake, jake_running, edges;
var pathImage;
var path
var point

function preload(){
  //pre-load images
  jake_running = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage("path", pathImage)
  path.scale=1.2
  path.y = path.width/2
  jake = createSprite(200,200,20,20);
  jake.addAnimation("running", jake_running);
  edges = createEdgeSprites();

  jake.scale = 0.8;
  jake.x = 50

  invisibleGround=createSprite(385,200,35,400)
  invisibleGround.shapeColor="black"
  invisibleGround2=createSprite(20,200,40,400)
  invisibleGround2.shapeColor="black"  
  invisibleGround3=createSprite(200,399,400,1)
  invisibleGround3.shapeColor="black"
  
  }

function draw() {
  background(0);
  textSize(2);
  stroke("black");
  fill("lightpink");
  text("Point:"+point,5,5);
  path.velocityY = 4;
  console.log(jake.y)
  jake.x=World.mouseX;
 
  if(keyDown("space")&&jake.y>=100){
    jake.velocityY = -10;
  }



  if(keyDown("enter")&&jake.y>=100){
    jake.velocityY = 10;
  }

  if(path.y > 400){
    path.y = height/2;
  }

  jake.velocityY = jake.velocityY + 0.5;
  jake.collide(invisibleGround)
  jake.collide(invisibleGround2)
  jake.collide(invisibleGround3)
  drawSprites();
}
