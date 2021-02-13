var canvas,database;
var allPlayers;
var gameState=0
var database;
var playerCount;
var form;
var game;
var player;
var car1,car2,car3,car4,cars;
function setup(){
  database = firebase.database();
  console.log(database);
 canvas= createCanvas(displayWidth-20,displayHeight-20);
game=new Game()
game.getState()
game.start()
 
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  } 
  
}

