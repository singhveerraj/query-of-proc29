
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   stand1 = new Ground(500,500,200,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stand1.display();
  drawSprites();
 
}



