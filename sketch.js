const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(210,310,50,50)  
    ground1 = new ground(200,350,400,10)
    box2 = new box(310,310,50,50)
    pig1 = new pig(260,310,20,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    ground1.display()
    box2.display()
    pig1.display()
}