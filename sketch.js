var mrect , frect 

function setup(){
  createCanvas(1200, 800);
  mrect= createSprite(400,400,80,30);
  mrect.shapeColor = "blue";
  frect= createSprite(600,400,50,80);
  frect.shapeColor = "red";
}

function draw() {
  background(255);  
  drawSprites();
  mrect.x= World.mouseX;
  mrect.y= World.mouseY;

  if(mrect.x-frect.x< mrect.width/2+frect.width/2
    && frect.x- mrect.x < mrect.width/2+frect.width/2
    && mrect.y- frect.y < mrect.height/2+frect.height/2
    && frect.y- mrect.y < mrect.height/2+frect.height/2 ){
  mrect.shapeColor= "purple";
  frect.shapeColor= "purple";
  }
  else {
    mrect.shapeColor = "blue";
    frect.shapeColor = "red";
  }
}
