var player;
var database,form;
var gameState = 0;
var payerCount = 0;
var game;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");
   
    drawSprites();
}

