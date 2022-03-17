const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

function preload(){
air_bomb = loadImage("air_bomb.png");
bomb = loadImage("bomb.png");
explosion_1= loadImage("explosion_1.png");
ocean= loadImage("ocean.jpg");
plane=loadImage("plane.png");
ship1 = loadImage("ship1.jpg");
ship2= loadImage("ship2.png");
ship3 = loadImage("ship3.jpg");
}





function steup(){
createCanvas(700,800);
frameRate(80);
engine = Engine.create();
world = engine.world;


}

function draw(){
    background(51);
    Engine.update(engine);


    drawSprites();
}