const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paper,dustbin1,dustbin2,dustbin3,ground;


function setup() {
	var canvas=createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	dustbin1 = new Dustbin(600, 650, 200, 20);
	dustbin2 = new Dustbin(600, 650, 200, 20);
	dustbin3 = new Dustbin(600, 650, 200, 20);

	paper = new Paper(100,600);

	 //Create a Ground
	 ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
	 World.add(world, ground);	

	
}
function draw(){
	background("white");
	Engine.update(engine);
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x :50 ,y:-50});
	}
}



