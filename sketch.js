var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var package_options={
  
		restitution : 1.0
	
		
}

	packageSprite=createSprite(width/2, 200, 10,10,package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.velocityY = 8;
	packageSprite.scale=0.2
	console.log(ground)



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	


	
	
	groundSprite=createSprite(width/2, height-35, width,10,ground_options);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	  var ground_options ={
        isStatic: true
    }
	

	ground = Bodies.rectangle(width/2, 650, width, 10 ,ground_options  );
	World.add(world, ground);



	Engine.run(engine);



}


function draw() {
  rectMode(CENTER);
  keyPressed();
  background(0);

rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
 



}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.velocityY = 8;
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
	
	
	
	

	


  }
}



