const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground

var particle = []
var plinko = []
var divisions = []
var divisionHeight = 200
var score = 0
var gS = "ok"


function setup() {
  createCanvas(815,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(410,800,820,20)
  for(var k = 0; k<=width; k = k + 90){
	divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
  }

  for( var j = 40; j <= width; j = j + 70){
    plinko.push(new Plinko(j,75,10))
  }
  for( var j = 10; j <= width; j = j + 70){
    plinko.push(new Plinko(j,175,10))
  }
  for( var j = 40; j <= width; j = j + 70){
    plinko.push(new Plinko(j,275,10))
  }
  for( var j = 10; j <= width; j = j + 70){
    plinko.push(new Plinko(j,375,10))
  }
}

function draw() {
  background(0,0,0);
  Engine.update(engine); 
  fill(random(0,225),random(0,225),random(0,225))
  textSize(25)

  text("10",25,750)
  text("10",120,750)
  text("10",205,750)
  text("10",295,750)
  text("10",385,750)
  text("10",475,750)
  text("10",565,750)
  text("10",655,750)
  text("10",745,750)

  text("Score: " + score,50,50)

  drawSprites();

  ground.display()
  //mousePressed()

  for(var r = 0; r<divisions.length; r++){
    divisions[r].display()
  }

  for(var s = 0; s<plinko.length; s++){
    plinko[s].display()
  }

  for(var t = 0; t<particle.length; t++){
    particle[t].display()
  }
}

function mouseClicked(){
  particle.push(new Particle(mouseX,0,10,10))
  score= score +10
}