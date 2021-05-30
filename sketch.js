const Engine = Matter.Engine;
const World =  Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

 
var gameState
var engine, world;
var particles = [];
var plinkos = [];
var particle
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
//plinkos = new Plinko(50,50,39)
 divisions = new Divisions(50,50,30,30)

 if (frameCount%60===0) {
   
 }
   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));


   }


    for (var j = 40; j <=width; j=j+50) 
    {
    
      particles.push(new particles(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       particles.push(new particles(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
      particles.push(new particles(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
      particles.push(new particles(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  divisions.display()
ground.display()
//plinkos.display()
particles.push(new Particle(random(width/2-10,width,width/2+10), 10,10))

   for (var i = 0; i < particles.length; i++) {
     
    particles[i].display();
     
   }
   if(frameCount%60===0){
    particles.push(new particles(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }




  drawSprites();
}


function mousePressed(){

if(gameState!=="end"){
  count++
  particle=newParticle(mouseX,10,10,10)
}



}








