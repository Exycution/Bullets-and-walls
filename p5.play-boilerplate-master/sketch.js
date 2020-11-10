var bullet , wall, thickness;
var speed, weight;
var deformation, damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,20,20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  
}

function draw() {
  background(0);  
    if(wall.x-bullet.x < wall.width/2 + bullet.width/2){
        bullet.velocityX = 0;
        damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

          if(damage < 10){
          wall.shapeColor = "green";

        }
        if(damage > 10){
          wall.shapeColor = "red";

        }
        

    }
    console.log(damage);
    

    drawSprites();
  }
  


