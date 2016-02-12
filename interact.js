/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.


var winningNumber = Math.ceil(Math.random() * 100);

var playerGuess;
var guessCount = 0;
var hintTaken = false;

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
  
  	$('#giveHint').on('click', function() {
		var numString = winningNumber.toString();
		var randomDigit = Math.ceil(Math.random() * 2) - 1;
		var numLength = numString.length;
		if(numLength === 1) {
			
			$('#hint').show();
			$('#hint').find('#hint-text').text('Only One Digit!');
		}
		else if(!hintTaken) {
    	
		$('#hint').show();
		$('#hint').find('#hint-text').text('One of the digits is: ' + numString[randomDigit]);
		hintTaken = true;
		}
		else {
			$('#hint').find('#hint-text').text('Nobody Likes a Cheater!');
		}
		
		
  });
  
  	$('#submitGuess').on('click', function() {
    	//playerGuess = +$('#playerNumber').val();
		//$('#checkInput').text(playerGuess);
		guessEntered();
  });
  
  
  	$('#restart').click(function() {
    location.reload();
	});
  
  
	
	
	$('#playerNumber').keypress(function(key) {
		
		if(key.which == 13) {
			key.preventDefault();
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
	//$(".Text").css('margin-top', vertAlign);
	var distanceOff = Math.abs(winningNumber - number) * 5;
	$('#status-bar').show();
	$('#status-bar').css('width', distanceOff);
	
	
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