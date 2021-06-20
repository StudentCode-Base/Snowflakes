const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var bgImg
var snowflakes=[]

function preload(){
  bgImg=loadImage("snow1.jpg")

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create() 
  world = engine.world
}

function draw() {
  background(bgImg);  
  Engine.update(engine)
  if (frameCount%10===0){
    snowflakes.push(new Snow(random(10,750),10,10))
  }
  for (var i=0;i<snowflakes.length;i++){
    snowflakes[i].display()
  }
}