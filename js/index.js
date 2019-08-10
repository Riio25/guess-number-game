
var lives = document.getElementById("lives").innerHTML;
var theNumber = Math.floor((Math.random() * 10) + 1);

function game(){

var guess = document.getElementById("guess").value;



if (guess === ""){
  alert("Please enter a number between 1-10")
} else {
  if (isNaN(guess)){
    alert('Please enter a number between 1-10.')
  } else{
    if (guess > 10 || guess < 0){
      alert('Please enter a number between 1-10')
    } else {
      if ( lives > 1){
        if (theNumber == guess){
          document.getElementById("gameover").innerHTML = "You Win!";
          document.getElementById("gameover").style.display = "block";
          document.getElementById("gameover").style.color = "green";
          document.getElementById("answer").disabled = "true";
          document.getElementById("restart").style.visibility = "visible";
          document.getElementById("guess").style.color = "green";
        } else {
          lives--
          document.getElementById("tryAgain").style.visibility = "visible";
          document.getElementById("lives").innerHTML = lives;
        }
        } else {
          document.getElementById("gameover").innerHTML = "You Lose!";
          document.getElementById("gameover").style.display = "block";
          document.getElementById("gameover").style.color = "red";
          document.getElementById("answer").disabled = "true";
          document.getElementById("restart").style.visibility = "visible";
          document.getElementById("guess").style.color = "red";
          document.getElementById("lives").innerHTML = "0";
        }
      }
    }
  }
}

function restart(){
  document.getElementById("gameover").style.display = "none";
  document.getElementById("tryAgain").style.visibility = "hidden";
  document.getElementById("restart").style.visibility = "hidden";
  document.getElementById("lives").innerHTML = "3";
  document.getElementById("answer").disabled = false;
  document.getElementById("guess").value = "Make your guess..."
  document.getElementById("guess").style.color = "white";
  lives = 3;


}

document.getElementById("gameover").style.display = "none";
document.getElementById("tryAgain").style.visibility = "hidden";
document.getElementById("restart").style.visibility = "hidden";


document.getElementById("answer").onclick = function () {
	game();
}

document.getElementById("restart").onclick = function() {
  restart();
}




