
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;

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
	stone=new stone(180,340,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy ,200,340,200,300);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  drawSprites();

  detectCollision();
  mouseDragged();
  mouseReleased();
  keyPressed();
  fly();
}
function mouseDragged() {

   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {

    fly(); {
		this.sling.bodyA = null;
}

function detectollision(lstone,lmango) {
	mango.body.position=lmango.body.position
	stone.body.position=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPostion.y, mangoBodyPosition.x, mangoBodyPostion.y)
	   if(distance<=lmango.r+lstone.r)
	   {
		   Matter.Body.setStatic(lmango.body, false);
	     }
	   }
	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);

function keyPressed() {
    if(keyCode === 32){
		slingshot.attach(bird.body);
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body);
    }
}


}
