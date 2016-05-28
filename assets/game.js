//setup variables
var clickSum = 0
var targetNumber =0
var endOfGame = false
var wins = 0
var losses = 0
var playerLoses=falseb

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

	$('#blue').on("click", function(){
		if (endOfGame == false){
			clickSum+=crystal.blue.power;
			checkScore();
			$('#clickSum').html(clickSum);
		};
	})

	$('#green').click(function(){
		if (endOfGame == false){
		clickSum+=crystal.green.power;
		checkScore();
		$('#clickSum').html(clickSum);
		};
	})

	$('#red').click(function(){
		if (endOfGame == false){
		clickSum+=crystal.red.power;
		checkScore();
		$('#clickSum').html(clickSum);
		};
	})

	$('#purple').click(function(){
		if (endOfGame == false){
		clickSum+=crystal.purple.power;
		checkScore();
		$('#clickSum').html(clickSum);
		};
	})
		//create targetNumber to (re)start game

	function startgame(){
			endOfGame = false;	
			playerLoses = false;
			clickSum = 0;
			targetNumber = Math.floor(Math.random() *(120-19)) + 19;
			
			crystal.blue.power = Math.floor(Math.random() *(12-1)) + 1;
			crystal.green.power = Math.floor(Math.random() *(12-1)) + 1;
			crystal.red.power = Math.floor(Math.random() *(12-1)) + 1;
			crystal.purple.power = Math.floor(Math.random() *(12-1)) + 1;
			
			//set up beginning- on click this will happen
			$('#clickSum').html(clickSum);
			$('#targetNumber').html(targetNumber);
			// after first game
			$('#wins').html("Wins: " + wins);
			$('#losses').html("Losses: "+losses);
			$('.alert-info').hide(1000);
			$('.alert-warning').hide(1000);
			$('.alert-success').hide(1000);
	}

	function checkScore(){
			if (clickSum == targetNumber){
					endOfGame =true;
					wins++;
					$('.alert-success').show(1000);
					$('.alert-info').hide(1000);
					$('.alert-warning').hide(1000);
					$('#button').empty();

			}else if (clickSum < targetNumber){
						playerloses =false;
						endOfGame	=false
						$('.alert-warning').show(1000);
						$('.alert-info').hide(1000);
						$('.alert-success').hide(1000);
						

			}else if (clickSum > targetNumber){
						playerloses =true;
						endOfGame =true;
						losses++;
						$('.alert-info').show(1000);
						$('.alert-warning').hide(1000);
						$('.alert-success').hide(1000);
						$('#button').empty();
					};

	}
	$('.btn').on("click", function(){
		startgame();
	})


});




