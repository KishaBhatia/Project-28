var ground,rectObject,paper,launch;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2, height-25, width, 10);
	rectObject=new Dustbin(width-200,height-40,150,20);
	paper=new Paper(130,100);

	launch = new Launcher(paper.body,{x:200,y:150});

	Engine.run(engine);
}
function draw() {
  background(150);
  rectMode(CENTER);
  paper.display();
  ground.display();
  rectObject.display();
  launch.display();  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
	 launch.fly();
 }
