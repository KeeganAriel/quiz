// var myQuestion = {
// 	question: "What is the best kind of pizza?",
// 	answers: ["Pepperoni", "Cheese", "Veggie"],
// 	rightAnswer: "Pinapple and Pepperoni",

// };
make interface
display eustion obj
// quiz object: tracking


var Question = function(question, answers, rightAnswer){
	this.question = question;
	this.answers = answers;
	this.rightAnswer = rightAnswer;
};

Question.prototype.guess = function(userGuess){
	if (rightAnswer) {
		console.log ("I agree. That's the best one!");
	} else {
		console.log ("You are totally wrong!");
	}
};



var theQuestion = new Question(
	"What is the best kind of pizza?", 
	["Pepperoni", "Cheese", "Veggie"], 
	"Pinapple and Pepperoni"); 

Question.guess("Cheese");