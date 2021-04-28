var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;


 var score = 0;
 var particle;
 var divisions = [];
var particles = [];
var plinkos = [];



var divisionHeight=300;
var line;


//var gameState = "PLAY"
var count = 0;
var score =0;




function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  textSize(35)
  text("500",14,600);
  text("400",90,600);
  text("300",166+20-8-5,600);
  text("200",242+20-10,600);
  text("100",318+20-10,600);
  text("100",394+20-10,600);
  text("200",470+20,600);
  text("300",546+40-10,600);
  text("400",622+50-10-15,600);
  text("500",698+60-10-15,600);


// if( gameState == "END"){
// textSize(100)
// text("GAME OVER",200,400 )
// }


// if(particle!=null){
//  particle.display();
//  if(particle.body.postion.y>760){
// if(particle.body.position.x< 300){
// score=score+500
// particle=null;

// }
//  }
// }



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

}
 


function draw() {
  background("black");
//   textSize(20)
//  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10))
    
    //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
  
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

























 
}