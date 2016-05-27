// prototype
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
	$('.A input').val(options[0]);
	$('.B span').text(options[1]);
	$('.B input').val(options[1]);
	$('.C span').text(options[2]);
	$('.C input').val(options[2]);
	$('.D span').text(options[3]);
	$('.D input').val(options[3]);
};

var Quiz = function(questions) {
	this.score = 0;
	this.currentQuestionIndex = 0;
	this.questions = questions;
	this.shuffle();


};

Quiz.prototype.shuffle = function() {
	this.questions = _.shuffle(this.questions);

};

Quiz.prototype.currentQuestion = function() {
	return this.questions[this.currentQuestionIndex];
};


var matrixQuestion = new Question (
	"In The Wachowski’s Matrix trilogy, what is Neo’s given name?",
	["John B. Thompson", "Andy N. Johnson", "Bill B. Anderton"],
	'Thomas A. Anderson' 

	);

var hackersQuestion = new Question (
	"In the Angelina Jolie’s first major motion picture, Hackers, who says ‘Spandex: it's a privilege, not a right.'?",
	['The Plague', 'Dade Murphy', 'Hero Protagonist', ],
	'Cereal Killer'
	);

var jnQuestion = new Question (
	"Who wrote the short story that the 1995 cyberpunk movie Johnny Mnemonic, staring the totally awesome Keanu Reeves, is based on?",
	['Neal Stephenson', 'Bruce Sterling', 'Richard K. Morgan'],
	'William Gibson'
	);

var netQuestion = new Question (
	"Angela receives a copy of this band's website by floppy disk. What is the name of the band whose website is the backdoor to the entire internet?",
	["Bach’s Babes", "Beethoven’s Phantom", "Schubert’s Spooks"],
	"Mozart's Ghost" 
	);

var existenzQuestion = new Question (
	"In the 1995 movie eXistenZ what kind of projectile does Ted pull from Allegra's arm after she’s been shot?",
	["A bullet", "A fingernail", "A bottle cap"],
	"A tooth"
	);

var questions = [existenzQuestion, netQuestion, jnQuestion, hackersQuestion, matrixQuestion];

var quiz = new Quiz(questions);

$(document).ready(function() { 

	var $right = $("#right");

	$('button').click(function() {
		$('.quizStart').hide();
		$('.question').show();
		$('.quizEnd').hide();
		$('.bottom').show();
		$('.socialIcons').hide();

		quiz.currentQuestion().display();

	});

	
	$('.submitButton').click(function() {
		event.preventDefault();
		var userAnswer = $('input[name=answer]:checked').val();
		if (quiz.currentQuestion().rightAnswer === userAnswer) {
			quiz.score = quiz.score + 1;
		}

		$right.text(quiz.score);
		$('#count').text(quiz.currentQuestionIndex + 1);


		quiz.currentQuestionIndex++;
		if (quiz.currentQuestionIndex <= 4) {
			quiz.currentQuestion().display();
		} else {
			$('.question').hide();
			$('.quizEnd').show();
			$('.socialIcons').show();
			$('#rightTotal').text(quiz.score);
			$('.bottom').hide();


		}

	});


	var newGame = function() {
	$('.question').hide();
	$('.quizStart').show();
	$('.quizEnd').hide();
	$('.bottom').hide();
	$('#right').text(0);
	$('#count').text(0);
	quiz = new Quiz(questions);

};

var aboutMe = function() {
	$('.aboutInfo').alert('test');

};

$("a.new").click(function() {
	newGame();
});

$("a.about").click(function() {
	$('.aboutInfo').dialog();
});

});