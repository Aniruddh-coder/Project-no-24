
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,Base,Log1,Log2;

function preload()
{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	
}

function setup() {
	createCanvas(1200, 350);


	engine = Engine.create();
	world = engine.world;

	Ball1 = new Ball(300,240,15);

	Base = new Log(width/1.2,height-50,240,20);
    Log1 = new Log(891,240,20,100);	
    Log2 = new Log(1109,240,20,100);
	ground1 = new Ground(width/2,height-35,1200,10);

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10,{isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ball1.display();
  Base.display();
  Log1.display();
  Log2.display();
  ground1.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x:50,y:-30});
	}
}

