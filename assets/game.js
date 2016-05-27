//setup variables
var clickSum = 0
var targetNumber
var endOfGame = false
var wins = 0
var losses = 0
var playerLoses

var crystal = {
	blue : {
		power : 0,
		pathtoimg : "images/blue.jpg",
	},

	green : {
		power : 0,
		pathtoimg : "images/green.jpg",
	},

	red : {
		power :0,
		pathtoimg : "images/red.jpg",
	},

	purple : {
		power : 0,
		pathtoimg : "images/purple.jpg",
	},
};

$(document).ready(function(){
	
	$('#blue').append('<img src=' + crystal.blue.pathtoimg);
	$('#blue').on("click", function(){
		if (endOfGame == false){
		clickSum=clickSum + crystal.blue.power;
		checkScore();
		$('#clickSum').html(clickSum);
		};
	})

	$('#green').append('<img src=' + crystal.green.pathtoimg);
	$('#green').click(function(){
		if (endOfGame == false){
		clickSum=clickSum + crystal.green.power;
		checkScore();
		$('#clickSum').html(clickSum);
		};
	})

	$('#red').append('<img src=' + crystal.red.pathtoimg);
	$('#red').click(function(){
		if (endOfGame == false){
		clickSum=clickSum + crystal.red.power;
		checkScore();
		$('#clickSum').html(clickSum);
		};
	})

	$('#purple').append('<img src=' + crystal.purple.pathtoimg);  
	$('#purple').click(function(){
		if (endOfGame == false){
		clickSum=clickSum + crystal.purple.power;
		checkScore();
		$('#clickSum').html(clickSum);
		};
	})
		//create targetNumber to (re)start game

	function startgame(){
			endOfGame = false;	
			playerLoses = false;
			clickSum = 0
			targetNumber = Math.floor(Math.random() * (120-19)) + 1;
			
			crystal.blue.power = Math.floor(Math.random() *(12-1)) + 1;
			crystal.green.power = Math.floor(Math.random() *(12-1)) + 1;
			crystal.red.power = Math.floor(Math.random() * (12-1)) + 1;
			crystal.purple.power = Math.floor(Math.random() *(12-1)) + 1;
			
			//set up beginning- on click this will happen
			$('#clickSum').html(clickSum);
			$('#targetNumber').html(targetNumber);
			// after first game
			$('#wins').html("Wins: " + wins);
			$('#losses').html("Losses: "+losses);
	}

	function checkScore(){
			if (clickSum == targetNumber){
					endOfGame = true;
					wins++;
					$('#alert alert-success').alert("You win!");
					$('#button').empty();
			}else if (clickSum > targetNumber){
						playerloses = true;
						endOfGame = true;
						losses++;
						$('#alert alert-warning').alert("Better luck next time!");
						$('#button').empty();

			}else if (clickSum < targetNumber){
						playerloses = false;
						endOfGame = false;
						$('#alert alert-info').alert("Keep going...");
					};
	}
	$('#button').on("click", function(){

		startgame();
	})


});




