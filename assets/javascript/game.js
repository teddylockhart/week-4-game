var targetScore;

var gem1;
var gem2;
var gem3;
var gem4;

var wins = 0
var losses = 0
var totalScore = 0

function reset() {
	targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
	$("#targetScore").text(targetScore);

	gem1 = Math.floor(Math.random() * (12 - 1)) + 1;
	gem2 = Math.floor(Math.random() * (12 - 1)) + 1;
	gem3 = Math.floor(Math.random() * (12 - 1)) + 1;
	gem4 = Math.floor(Math.random() * (12 - 1)) + 1;

	totalScore = 0;
	$("#yts").text(totalScore);
}

$(document).ready(function() {

	reset();

	function victory() {
		wins++;
		$("#wins").text("Wins: " + wins);
		$("#outcome").text("You won!");
		reset();
	}

	function defeat() {
		losses++;
		$("#loss").text("Losses: " + losses);
		$("#outcome").text("You lost!");
		reset();
	}

	function score() {
		$("#yts").text(totalScore);
		$("#outcome").text("")
	}

	function outcome() {
		if (totalScore === targetScore) {
			victory();
		}
		else if (totalScore > targetScore) {
			defeat();
		}
	}

	$("#gem1").on("click", function() {
		totalScore = totalScore + gem1;
		score();
		outcome();
	})

	$("#gem2").on("click", function() {
		totalScore = totalScore + gem2;
		score();
		outcome();
	})

	$("#gem3").on("click", function() {
		totalScore = totalScore + gem3;
		score();
		outcome();
	})

	$("#gem4").on("click", function() {
		totalScore = totalScore + gem4;
		score();
		outcome();
	})
});

