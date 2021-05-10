
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var polygon_img;
var stand
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  myWorld = engine.world;
  Engine.run(engine);
  
  stand = new Ground (450,200,200,10)
  ground = new Ground (450,390,900,10)
  box1 = new Box (400,150,50,50)
  box2 = new Box (450,150,50,50)
  box3 = new Box (500,150,50,50)
  box4 = new Box (425,100,50,50)
  box5 = new Box (475,100,50,50)
  box6 = new Box (450,50,50,50)
  polygon = new Polygon (200,200,50,50)
  connection = new Connect (polygon.polygon,{x:200,y:200})

  

}
function draw() {
  background(56,44,44); 
 Engine.update(engine)
  textSize(20);
  ground.display()
  stand.display()
  fill ("blue")
  box1.display()
  box2.display()
  box3.display()
  fill("green")
  box4.display()
  box5.display()
  fill("red")
  box6.display()
  polygon.display()
  connection.display()
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.polygon,{
    x:mouseX,y:mouseY
  })
}
function mouseReleased(){
  connection.fly();
}