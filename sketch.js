
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2;
var rope3,rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 =new Roof(200,100,50,200);
	bobObject1= new Bob(150,300,50,50);
	bobObject2= new Bob(200,300,50,50);
	bobObject3= new Bob(250,300,50,50);
	bobObject4= new Bob(300,300,50,50);
	bobObject5= new Bob(350,300,50,50);
	rope1= new Rope(bobObject1.body,roof1.body,-bobDiameter*2,0);
	rope2= new Rope(bobObject2.body,roof1.body,-bobDiameter*2,0);
	rope3= new Rope(bobObject3.body,roof1.body,-bobDiameter*2,0);
	rope4= new Rope(bobObject4.body,roof1.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



