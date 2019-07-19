
var lives = document.getElementById("lives").innerHTML;
var theNumber = Math.floor((Math.random() * 10) + 1);

function game(){

var guess = document.getElementById("guess").value;

if ( lives > 1){
  if (theNumber == guess){
    document.getElementById("win").style.display = "block";
  } else {
  	lives--
    document.getElementById("tryAgain").style.visibility = "visible";
    document.getElementById("lives").innerHTML = lives;
  }
  } else {
  document.getElementById("lose").style.display = "block";
  }

}

document.getElementById("win").style.display = "none";
document.getElementById("lose").style.display = "none";
document.getElementById("tryAgain").style.visibility = "hidden";

document.getElementById("answer").onclick = function () {
	game();
}




