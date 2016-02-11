/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
var winningNumber = Math.ceil(Math.random() * 100); //Generates random decimal between 0-1
$(document).ready(

function lowerOrHigher(){
	if(winningNumber < 50) {
		$(".input-Text").text("lower");
	}
	else {
		$(".input-Text").text("higher");
	}
}

)


$(document).ready(

function generateWinningNumber (){
    
	$('#guessNumber').val(winningNumber);
}





)


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