
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Ball;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
      rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	ground= new Ground(400,670,820,10);

	Ball= new Paperball(150,400,36,36);

	dustbin1= new Dustbin(600,660,200,18);
	dustbin2= new Dustbin(500,602,18,100)
	dustbin3= new Dustbin(700,602,18,100);
}


function draw() {
  rectMode(CENTER);


  if(keyDown("up")){
    Matter.Body.applyForce(Ball.body,Ball.body.position,{x:40,y:-5})
  }

  background(0);
  
  drawSprites();

  ground.display();

  Ball.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}



