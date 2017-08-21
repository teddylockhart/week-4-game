var outcome = ["You won!", "You Lost!"];


// Random Number Selector

function startGame() {

	function randomIntFromInterval(min, max){
			return Math.floor(Math.random()*(max-min+1)+min);
	}

	var targetScore = randomIntFromInterval(19, 120);

	$("#targetScore").text(targetScore);

}

// Status Notification



// Jewel Number Assignment

function assignment() {
	var numbers = []
		
}

// Total Score Updater