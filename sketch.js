var ship,img,sea,seaimg
function preload(){
img=loadAnimation('ship-1.png','ship-2.png')
seaimg=loadImage('sea.png')
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400)
sea.addImage('sea',seaimg)
sea.scale=0.25
sea.velocityX=-2
ship=createSprite(200,250,100,100)
ship.addAnimation('ship',img)
ship.scale=0.25
}

function draw() {
  background("blue");
if(sea.x<0){
  sea.x=200
}



 drawSprites()
}