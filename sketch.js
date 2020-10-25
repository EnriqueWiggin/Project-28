
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeObj;

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	
	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1070,50,30);
	stone=new Stone(235,420,30); 
	treeObj=new Tree(1050,580);
	slingShot=new SlingShot(stone.body, {x:235, y:420});
	groundObject=new Ground(width/2,600,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy ,200,340,200,300);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  slingShot.display();
  groundObject.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  drawSprites();

}
function mouseDragged() {

   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
	slingShot.fly();
}


function detectCollision(lstone,lmango) {
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	   if(distance<=lmango.r+lstone.r)
	   {
		   Matter.Body.setStatic(lmango.body, false);
	     }
	   }

function keyPressed() {
    if(keyCode === 32){
		slingshot.attach(bird.body);
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body);
    }
}



