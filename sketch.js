var starImg,bgImg;
var star, starBody;
var fairy, fairyImg
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyFlying", fairyImg);
	fairy.scale = 0.25


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy.setCollider("rectangle", 0,0,fairy.width,fairy.height);
	fairy.debug = false;

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.positionY > 470){
	  Matter.Body.setStatic(starBody,true);
  }
  
  if(star.isTouching(fairy)){

	star.velocityY=0;
	star.velocityX = 0;
	fairy.velocityX=0;
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyDown(LEFT_ARROW)){
		fairy.velocityX = -4.5;
		fairy.velocityY = 0;
	}

	if (keyDown(RIGHT_ARROW)){
		fairy.velocityX = 4.5;
		fairy.velocityY = 0;
	}

	//writw code to move fairy left and right
	
}
