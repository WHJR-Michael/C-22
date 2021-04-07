const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myUniverse, myWorld, ground, ball;
var groundOptions, ballOptions;

function setup() {
  createCanvas(400,400);
  ballOptions = {
    restitution: 1
  }

  groundOptions = {
    isStatic: true
  }
  
  myUniverse = Engine.create();
  myWorld = myUniverse.world;
  ground = Bodies.rectangle(200, 350, 400, 20, groundOptions);
  World.add(myWorld,ground);
  ball = Bodies.circle(200, 200, 30, ballOptions);
  World.add(myWorld,ball);
  console.log(ball);
}

function draw() {
  Engine.update(myUniverse);
  background(0); 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipse(ball.position.x, ball.position.y, 60, 60);

}