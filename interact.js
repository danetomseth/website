/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.


var winningNumber = Math.ceil(Math.random() * 100); //Generates random decimal between 0-1
var playerGuess;
var guessCount = 0;

/*$(document).keypress(function(key) {
    if(key.which == 13) {
        alert('You pressed enter!');
    }
});*/

$(document).ready(function() {
	$('#playerNumber').val('Input Number');
	$('#correctNumber').text("Winning number: "+winningNumber);
	$('#guessNumber').text("Guess Left: "+(5- guessCount));
	
	$('#playerNumber').on('click', function() {
    $(this).val("");
  });
  
  	$('#submitGuess').on('click', function() {
    	//playerGuess = +$('#playerNumber').val();
		//$('#checkInput').text(playerGuess);
		guessEntered();
  });
  
  
	
	
	$('#playerNumber').keypress(function(key) {
		
		if(key.which == 13) {
			key.preventDefault();
    	//playerGuess = +$(this).val();
		//$('#checkInput').text(playerGuess);
		guessEntered();
		}
    //var dailyPrice = +$(this).closest('.tour').data('daily-price');
    
  });
  /*$('#playerNumber').on('focus', function() {
    $('#playerNumber').val(99);
  });*/
});

function guessEntered() {
	playerGuess = +$('#playerNumber').val();
	$('#playerNumber').val('');
	//comment
	
	guessCount++;
	$('#checkInput').text("Last Guess: "+playerGuess);
	$('#guessNumber').text("Guess Left: "+(5- guessCount));
	
	
	highOrLow(playerGuess);
	
	checkGuess();
	
	if(guessCount >= 5) {
		gameOver();
	}
}

function highOrLow(number) {
	if(number < winningNumber) {
		resultBox('low');
	}
	else if(number > winningNumber) {
		resultBox('high');
	}
	else if(number === winningNumber) {
		alert('You won');
	}
}



function resultBox(result) {
	if(result == 'low') {
		$('#guessResult').css({'background-color': 'red'});
		$('#guessResult').show();
		$('#guessResult').find('#guessHighlight').text('Too Low');
	}
	else if(result == 'high') {
		$('#guessResult').css({'background-color': 'green'});
		$('#guessResult').show();
		$('#guessResult').find('#guessHighlight').text('Too High');
		
	}
}

function gameOver() {
	
}


/*function fetchGuess() {
	$('guessNumber').keypress(function() {
		playerGuess = $(this).val();
		alert("Keypress");
	});
};

function changeText () {
	$('.input-wrapper').on('click' , function()    {
            lowerOrHigher();
			
        });	
};*/


/*function checkGuess() {
	alert("here");
	playerGuess = $(this).val();
	
};*/


function generateWinningNumber (){
    
	$('#guessNumber').val(winningNumber);
};








/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

//var playersGuess,
//    winningNumber



/* **** Guessing Game Functions **** */

// Generate the Winning Number

//function generateWinningNumber(){
	// add code here
//}

// Fetch the Players Guess



// Determine if the next guess should be a lower or higher number



// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */