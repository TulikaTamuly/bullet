var bullet, wall
var speed,weight,deformation,thickness

function setup() {
  createCanvas(1200,600);
  thickness=random(20,85)
  bullet = createSprite(50, 300, 50, 10);
  bullet.shapeColor = "white";
  bullet.debug = true;
  wall = createSprite(1150,300,thickness,300);
  wall.shapeColor = "green";
  wall.debug = true;
  speed=round(random(55,90))
  weight=round(random(400,1500))
  
deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
bullet.velocityX=speed
}
function draw() {
  background(0,0,0);  
  

  if( isTouching(car,wall)){
    bullet.velocityX=0
    if(deformation>10){
      wall.shapeColor="red"
    }

    else if(deformation<10){
      wall.shapeColor="green"
    }
    
  } 

  
  drawSprites();
}


