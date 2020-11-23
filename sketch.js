var boyImage,boy,stoneImage,stone;
var ground1;
var slingshot;
var hand;
var tree,treeImg;     
var mango1,mango2,mango3,mango4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boyImage.jpg");
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1000,1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.Sprite for Ground
    ground1 = createSprite(500,500,900,20);
   //Sprite for stone
	stone = new Stone(150,295,50,50);
	
	//Sprite and code for boy
	boy = createSprite(220,327,50,50);
	boy.scale = 0.95;
	boy = boy.addImage(boyImage);
	//Slingshot code
    slingshot= new SlingShot (stone.body,{x:150,y:295});  
	//Tree code
	tree = createSprite(740,250,300,400);
	tree.scale = 0.40
	tree = tree.addImage(treeImg);
	//Mangoes code
	mango1 = new Mango(700,200,50,50);
	mango2 = new Mango(760,300,50,50);
	mango3 = new Mango(820,300,50,50);
	mango4 = new Mango(880,300,50,50);

	Engine.run(engine);
  
}


function draw() {
 
background(1000);
//Display all class variables
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
slingshot.display();
drawSprites();
 
}
//Slingshot movement function	
function mouseReleased(){
	slingshot.fly();
}