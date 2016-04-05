// // };
// make interface
// display eustion obj
// quiz object: tracking


var Question = function(question, answers, rightAnswer){
	this.question = question;
	this.answers = answers;
	this.rightAnswer = rightAnswer;
};


Question.prototype.getOptions = function() {
	var options = [this.rightAnswer].concat(this.answers);
		return _.shuffle(options);
};

Question.prototype.display = function() {
	var options = this.getOptions();
	$('.questionText').text(this.question);
	$('.A span').text(options[0]);
	$('.B span').text(options[1]);
	$('.C span').text(options[2]);
	$('.D span').text(options[3]);
};


// create var to store user choice
	// get answer and check that it's right
	// track checked
// update count
// track amout right


var matrixQuestion = new Question (
	"Matrix: In The Wachowski’s Matrix trilogy, what is Neo’s given name?"
	["John B. Thompson", "Andy N. Johnson", "Bill B. Anderton"],
	'Thomas A. Anderson' 

);

var hackersQuestion = new Question (
	"In the Angelina Jolie’s first major motion picture, Hackers, who says ‘Sandex: it's a privilege, not a right.'?",
	['The Plague', 'Dade Murphy', 'Hero Protagonist', ],
	'Cereal Killer'
);

var jnQuestion = new Question (
	"Who wrote the short story that the 1995 cyberpunk movie Johnny Mnemonic, staring the totally awesome Keanu Reeves, is based on?",
	['Neal Stephenson', 'Bruce Sterling', 'Richard K. Morgan'],
	'William Gibson'
);

var netQuestion = new Question (
	"Angela receives a copy of this band's website by floppy disk. What is the name of the band whose website is the backdoor to the entire internet?"
	['Bach’s Babes', "Beethoven’s Phantom", "Schubert’s Spooks"],
	"Mozart's Ghost" 
)

var random = Math.floor(Math.random() * $('.item').length);
$('.item').hide().eq(random).show();

$(document).ready(function() { 

	$('button').click(function() {
		$('.quizStart').hide();
		$('.question').show();
		matrixQuestion.display();

	});



	$('.submitButton').click(function() {
		event.preventDefault();
		jnQuestion.display();

		// if rightAnswer is :checked
			// then add to right count


		// when you click the submit buttion
		// get user imput from radio button
			// get selected radio button value
		// compare to right answer 
		// add to counter
		// add to right answer count
		// clear radio input
		// random next question
	});


var newGame = function() {
	// reload game
	// set right to 0 of X
	// reset correct answers
	// display start page
	$('.question').hide();
	$('.quizStart').show();
	};

$("a.new").click(function() {
	newGame();
});
 
});