"use strict";

// объект с вопросами и ответами 
var question_list = [];

var questions = {

	title: {
		value: "Тест по программированию"
	},

	question_list: [{

		text: "Алгоритм это ...",
		answers: ["Последовательность команд, выполнение которых приводит нас к решению поставленной задачи.", "Последовательность действий, выполнив которые мы можем запустить программу. ", "Задача, которую можно решить."],
		correctAnswer: "Последовательность команд, выполнение которых приводит нас к решению поставленной задачи."

	}, {

		text: " Каждое выражение(каждый оператор) в программе отделяется друг от друга ...",
		answers: ["точкой с запятой ", "точкой ", "запятой "],
		correctAnswer: "точкой с запятой "
	}, {
		text: "Тип integer предназначен для переменных в которых хранятся ...",
		answers: ["Символы ", "Целые числа ", "Любые числа "],
		correctAnswer: "Целые числа "

	}]
};

// записать в localStorage, прочесть данные из localStorage
localStorage.setItem("test", JSON.stringify(questions));
var returnQuestions = JSON.parse(localStorage.getItem("test"));

$(function () {

	var html = _.template($("#page").html());
	var content = html(returnQuestions);
	$("body").append(content);

	rightAnswersArrFill();
	$('#check_result').click(function (event) {

		event.preventDefault();
		$('#overlay').fadeIn(400, function () {
			$('#modal_form').css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);

			if (_.difference(answersArr, rightAnswersArr) == 0 && answersArr != 0) {
				$('.right').css('display', 'block');
			} else {
				$('.wrong').css('display', 'block');
			}
		});
		radioReset();
	});
});

var answersArr = [];
answersArr.fillArray = function (event) {

	var target = event.target;
	if (target.getAttribute('data-go')) {

		var labelValue = target.getAttribute('data-label');
		var _number = target.getAttribute('data-num');
		answersArr[_number] = labelValue;
	}console.log(number);
};

var rightAnswersArr = [];
var rightAnswersArrFill = function rightAnswersArrFill() {
	for (var i = 0; i < 3; i++) {
		rightAnswersArr.push(questions.question_list[i].correctAnswer);
	}

	return rightAnswersArr;
};

var radioReset = function radioReset() {
	$('input[type="radio"]').prop('checked', false);
	$('p').css('display', 'none');
};

$(function () {
	$('#check_result').click(function (event) {
		event.preventDefault();
		$('#overlay').fadeIn(400, function () {
			$('#modal_form').css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);
		});
	});

	$('#modal_close, #overlay').click(function () {
		$('#modal_form').animate({ opacity: 0, top: '45%' }, 200, function () {
			$(this).css('display', 'none');
			$('#overlay').fadeOut(400);
		});
	});
});
