const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var ball;
var string;

function setup() {
  createCanvas(1200,1000);
  
  engine=Engine.create();
  world=engine.world;

  ground=new Ground();
  block1=new Hitter(800,200,90,90);
  block2=new Hitter(800,200,90,90);
  block3=new Hitter(800,200,90,90);
  block4=new Hitter(800,200,90,90);
  block5=new Hitter(800,200,90,90);
  block6=new Hitter(800,200,90,90);
  ball = new Ball(200,10,80);

 // string=new chain(string.body,{x:700,y:100});
  
  
}




function draw() {
  background("white");
  Engine.update(engine);
 
  
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  ball.display();
 // string.display();
  
 
  
}

  function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

