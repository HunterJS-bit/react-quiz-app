import React, { useState } from "react";
import Quiz from './Quiz';

const questions = [
	{
		question: 'Непосредно регулисање саобраћаја на путевима врше:',
		options: [
			{
				name: 'check-1',
				key: 'checkBox1',
				label: 'униформисани комунални полицајци:',
			},
			{
				name: 'check-2',
				key: 'checkBox2',
				label: 'униформисани полицијски службеници:',
			},
			{
				name: 'check-3',
				key: 'checkBox3',
				label: 'инспектори за друмски саобраћај:',
			},
		],
		answers: 1,
	},
	{
		question: 'Маса оптерећеног скупа возила (лица и терет) је:',
		options: [
			{
				name: 'check-1',
				key: 'checkBox1',
				label: 'укупна маса скупа возила,',
			},
			{
				name: 'check-2',
				key: 'checkBox2',
				label: 'највећа дозвољена укупна маса скупа возила,:',
			},
			{
				name: 'check-3',
				key: 'checkBox3',
				label: 'осовинско оптерећење скупа возила,',
			},
			{
				name: 'check-4',
				key: 'checkBox4',
				label: 'највећа дозвољена маса скупа возила,',
			},
		],
		answers: 0,
	},
	{
		question: 'Од саобраћајног знака приказаног на слици се завршава ',
		options: [
			{
				name: 'check-1',
				key: 'checkBox1',
				label: 'насељено место.,',
			},
			{
				name: 'check-2',
				key: 'checkBox2',
				label: 'насеље',
			},
			{
				name: 'check-3',
				key: 'checkBox3',
				label: 'зона успореног саобраћаја.',
			},
			{
				name: 'check-4',
				key: 'checkBox4',
				label: 'туристичко одредиште.',
			},
		],
		answers: 2,
	},
];

const QuizWrapper = () => {
	const [qIndex, setIndex] = useState(0);
	const question = questions[qIndex];
	const totalQuestions = questions.length;

	const changeQuestion = () => {
		setIndex((prev) => {
			return prev + 1;
		});
	};

	return (
		<div className='quiz'>
			<h2>quiz wrapper </h2>
			<p>{qIndex + 1} / { totalQuestions }</p>
			<Quiz questions={question} />
			<button onClick={changeQuestion}> Sledece pitanje</button>
		</div>
	);
};

export default QuizWrapper;
