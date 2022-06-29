import React, { useState } from 'react';

export default function App() {
	const questions = [	//Database of all the questions
		{
			questionText: "A girl fell off a 50-foot ladder but didn't get hurt. How come?",
			answerOptions: [
				{ answerText: 'She can fly', isCorrect: false },
				{ answerText: 'She is immortal', isCorrect: false },
				{ answerText: 'She fell off the last step', isCorrect: true },
				{ answerText: 'She lied', isCorrect: false },
			],
		},
		{
			questionText: 'What is greater than God and more evil than the devil. Rich people want it, poor people have it. And if you eat it, you will die?',
			answerOptions: [
				{ answerText: 'Greed', isCorrect: false },
				{ answerText: 'Nothing', isCorrect: true },
				{ answerText: 'Love', isCorrect: false },
				{ answerText: 'Happiness', isCorrect: false },
			],
		},
		{
			questionText: 'Thanks to me, you can see straight through the wall. What am i?',
			answerOptions: [
				{ answerText: 'A Window', isCorrect: true },
				{ answerText: 'A punch', isCorrect: false },
				{ answerText: "Superman's eye", isCorrect: false },
				{ answerText: 'Mjollnir', isCorrect: false },
			],
		},
		{
			questionText: 'Am I hired?',
			answerOptions: [
				{ answerText: 'Obviously', isCorrect: false },
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'Probably', isCorrect: false },
				{ answerText: '!NO', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0); //To store the location of the current question
	const [showScore, setShowScore] = useState(false); //To dislay the score page
	const [score, setScore] = useState(0); //To display the number of correct options selected

	const handleAnswerOptionClick = (isCorrect) => { //To check whether an answer is right or wrong
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1; //To iterate the value of question number
		if (nextQuestion < questions.length) { //To check the end of the question array
			setCurrentQuestion(nextQuestion); //To store the iterated value in the "currentQuestion" variable
		} else {
			setShowScore(true); 
		}
	};
	return (
		<div className='app'> 
		{/* In react there should only be one parent element  */}
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							// We are mapping through the array to display all the elements in it
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							// On clicking the button, handleAnswerOptionClick will evoke
						))}
					</div>
				</>
			)}
		</div>
	);
}
