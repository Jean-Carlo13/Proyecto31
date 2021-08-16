//variable del motor fisico 
var Engine = Matter.Engine,
//motor del mundo,eventos y cuerpos
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 //variable de las particulas,plikos/clabijas,divisions/divisiones,divisionHeight/altura de las divisiones y score/el puntaje
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
//sirve para configurar funciones 
function setup() {
  //tamaño del lienzo
  createCanvas(800, 800);
  //se crea un motor
  engine = Engine.create();
  //se agrega el motor al mundo
  world = engine.world;
  //se crea el piso ___
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //crea la cuarta fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //crea los objetos partícula
  
    
}
 

//funcion para dibujar objetos 
function draw() {
  //color de fondo
  background("black");
  //tamaño del texto
  textSize(20)
 //cuando el motor se actualiza 
  Engine.update(engine);
  //para mostrar el piso
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  if(frameCount %60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
    score ++;
  }
  //bucle de las particulas y divisiones
   for(var j = 0; j < particles.length;j++){
     particles[j].display();
   }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

   

  //muestra las partículas 
  
}
