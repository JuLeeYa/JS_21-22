




// объект с вопросами и ответами 
let question_list = [];


let questions = 	{

	title: {
		value: "Тест по программированию"
	},

	question_list: [
	{

		text: "Алгоритм это ...",
		answers: [

		"Последовательность команд, выполнение которых приводит нас к решению поставленной задачи.", 
		"Последовательность действий, выполнив которые мы можем запустить программу. ",
		"Задача, которую можно решить."

		],
		correctAnswer: "Последовательность команд, выполнение которых приводит нас к решению поставленной задачи."
		
	},
	{

		text: " Каждое выражение(каждый оператор) в программе отделяется друг от друга ...",
		answers: [

		"точкой с запятой ",
		"точкой ",
		"запятой "

		],
		correctAnswer: "точкой с запятой "	
	},
	{
		text: "Тип integer предназначен для переменных в которых хранятся ...",
		answers: [

		"Символы ",
		"Целые числа ",
		"Любые числа "

		],
		correctAnswer:"Целые числа "
		
	},
	]
};



// записать в localStorage, прочесть данные из localStorage
localStorage.setItem("test", JSON.stringify(questions));
let returnQuestions = JSON.parse(localStorage.getItem("test"));




$(function(){

	let html = _.template($("#page").html());
	let content = html(returnQuestions);
	$("body").append(content);

	rightAnswersArrFill();
    $('#check_result').click( function(event){ 
    
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
		 		$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 

					if ((_.difference(answersArr, rightAnswersArr) == 0) && (answersArr!=0) ) {
						$('.right').css('display', 'block')
					} else {
						$('.wrong').css('display', 'block')
					}
				});
		radioReset();
	});
  });

let answersArr = [];
answersArr.fillArray = function (event) {

	let target = event.target;
	if (target.getAttribute('data-go')) {

		let labelValue = target.getAttribute('data-label');
		let number = target.getAttribute('data-num');
		answersArr[number] = labelValue;

	}console.log(number);
};

let rightAnswersArr = [];
let rightAnswersArrFill = function () {
for (var i = 0; i < 3; i++) {
		rightAnswersArr.push(questions.question_list[i].correctAnswer);

	}

	
	return rightAnswersArr;
};




let radioReset = function() {
	$('input[type="radio"]').prop('checked', false);
	$('p').css('display', 'none');
};



$(function() { 
	$('#check_result').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400, 
		 	function(){ 
		 		$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
				});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
				);
		});
});




















