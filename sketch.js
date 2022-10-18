  
var mar, marImg;
var garrafa, garrafaImg, garrafasGroup;
var climberImg, climber, climbersGroup;
var peixe, peixeImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play" 

function preload(){
  marImg = loadImage("tomclohosycole.png");
  garrafaImg = loadImage("Garrafa-De-Ilustração-Vetorial-De-água-Mineral-Isolada-No-Clipart-De-água-Mineral-De-Fundo-Branco-PN.png");
  //climberImg = loadImage("climber.png");
  peixeImg = loadImage("Png-De-Peixe-Desenhado-à-Mão-PNG-_-Peixe_-Vida-Marinha_-Frutos-Do-Mar-Imagem-PNG-e-PSD-Para-Download.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  //spookySound.loop();
  mar = createSprite(300,300);
  mar.addImage("mar",marImg);
  mar.velocityY = 1;
  
  garrafasGroup = new Group();
  //climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  peixe = createSprite(200,200,50,50);
  peixe.scale = 0.3;
  peixe.addImage("peixe", peixeImg);
}


function draw() {
  background(255);
 if(mar.y > 400){
      mar.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        peixe.x = peixe.x - 3;

      // escreva o código para mover para a esquerda quando a tecla para a esquerda for pressionada
    }
    if(keyDown("right_arrow")){
  
          peixe.x = peixe.x + 3;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("space")){
  
         peixe.velocityY = -10;

      // escreva o código para mover para cima quando a tecla espaço for pressionada
      
    }
  
    peixe.velocityY = peixe.velocityY + 0.8;
    
   
      //escreva uma condição para a torre de rolagem infinita

      spawnDoors();

    if(invisibleBlockGroup.isTouching(peixe) || peixe.y > 600){
      peixe.destroy();
      gameState = "end";
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {

  if (frameCount % 240 === 0) {
    var garrafa = createSprite(200, -50);
    //var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    //invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
  
    garrafa.x = Math.round(random(120,400));
    //garrafa.x = climber.x;
    garrafa.x = invisibleBlock.x; 
    garrafa.addImage(garrafaImg);
    //climber.addImage(climberImg);
    garrafa.scale = 0.1;

    garrafa.velocityY = 1;
    //climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    
     
    peixe.depth = garrafa.depth;
    peixe.depth =1;
    
  

    garrafa.lifetime = -1;
    //climber.lifetime = -1;
    invisibleBlock.lifetime = -1;
    mar.lifetime = -1;

     garrafasGroup.add(garrafa);
     invisibleBlock.debug = true;
     //climbersGroup.add(climber);
     invisibleBlockGroup.add(invisibleBlock);
  }
}

