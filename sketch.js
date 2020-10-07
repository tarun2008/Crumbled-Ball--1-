
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,ball;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    
    ground= new Ground(400,790,800,20);
    ball= new Circle(100,700);
    box1=new Box();
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   
   ball.display();
   ground.display();
   
//keyPressed();
   
}
function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});

}
}

