
function preload(){

  sealmg = loadImage("sea.png");
  shiplmg1 = loadAnimation("ship-1.png,ship-2.png")

  sealmg.velocityX = 3

  spriteName.addlmage(sealmg);
}

function setup(){
  createCanvas(400,400);

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
}

function draw() {
  background("blue");
  drawSpries();
}