
//"use strict";
/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
//initBoard();
//makeBoxOnBoard();
/*
MoveY();
MoveX();
document.getElementsByTagName("body")[0].style.backgroundColor = "gray";
var  myBox = document.getElementById("myBox");

//console.log( tileMap01);
//document.getElementById("divMap").innerHTML= tileMap01;
//var X =500;
//var Y = 400 ;
//var luckyNumber = 5;
var idCounter = 0;

function MoveY() {
  //var MoveX = document.getElementById("player").innerHTML = X;
 
 var mY = document.getElementById("animateY");   
   var Y = 0;
   clearInterval(idCounter);
   idCounter = setInterval(frame, 6);
   function frame() {
     if (Y == 400) {
       clearInterval(idCounter);
     } else {
       Y++; 
       mY.style.right = Y + "px"; 
       mY.style.top = Y + "px"; 
       //test
        
    
       
     }
   }
 }
 
function MoveX() {
 //var MoveX = document.getElementById("player").innerHTML = X;

var mX = document.getElementById("animateX");   
  var X = 0;
  clearInterval(idCounter);
  idCounter = setInterval(frame, 6);
  function frame() {
    if (X == 300) {
      clearInterval(idCounter);
    } else {
      X++; 
      mX.style.left = X + "px"; 
      mX.style.top = X + "px"; 
      mX.style.right = X + "px"; 
      mX.style.left = X + "px"; 
      //elem.style.right = pos + "px"; 
      
    }
  }
}





/*
function initBoard() {
  var blackBoxBool  = true;

  for (let boxTotalHeight = 0; boxTotalHeight < Y; boxTotalHeight = boxTotalHeight + 50) {
      for (let boxTotalWidth = 0; boxTotalWidth <X; boxTotalWidth = boxTotalWidth + 50) {

          if (blackBoxBool ) {
              makeBoxOnBoard("black");
          }
          else {
              makeBoxOnBoard("white");
          }

          blackBoxBool  = !blackBoxBool ;
      }

      blackBoxBool  =! blackBoxBool ;
  }
}

function makeBoxOnBoard(colorOfBox) {
  var newBox = document.createElement("div");

  newBox.id = ++idCounter;

  newBox.classList.add("box");
  newBox.classList.add(colorOfBox + "Box");

myBox.appendChild(newBox);
  console.log(newBox);

  if (idCounter === luckyNumber) {
      newBox.classList.add("player");
  }
}

function move(offsetPos) {
  var playerElement = document.getElementsByClassName("player")[0];
  var playerNextElementId = Number(playerElement.id) + Number(offsetPos);
  var playerNextBox = document.getElementById(playerNextElementId);

  if (playerNextElementId !== 0 && playerNextElementId <= idCounter) {
      playerElement.classList.toggle("player");
      playerNextBox.classList.toggle("player");
  }


}


 var  GameManager ={
   Game: function(){

 player = new Player();

   }

 }

// var Boxes = document.getElementById("Box");

var Tiles = {
    Wall: "tile-wall",
    Space: "tile-space",
    Goal: "tile-goal",
  };
  function map (){


  
}
  /*   Enum of CSS Classes for the moving elements   */
/*


  var Entities = {
    Character: "entity-player",
    Block: "entity-block",
    BlockDone: "entity-block-goal",
  };
  
  /*  Legend
      W = Wall
      B = Movable block
      P = Player starting position
      G = Goal area for the blocks
  */
 
 /*
  var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["B"],
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        ["B"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        ["B"],
        [" "],
        ["B"],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        ["W"],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        [" "],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
      ],
      [
        ["W"],
        [" "],
        [" "],
        [" "],
        ["W"],
        [" "],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        ["G"],
        ["G"],
        ["W"],
      ],
      [
        ["W"],
        [" "],
        ["B"],
        [" "],
        [" "],
        ["B"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        ["G"],
        ["G"],
        ["W"],
      ],
      [
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        ["P"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        ["G"],
        ["G"],
        ["W"],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
    ],
  };

console.log( tileMap01);
document.getElementById("divMap").innerHTML= tileMap01;