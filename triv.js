/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("triv");
var questions = [{
    q: "What is the capital of Sweden \n  1) Stockholm  \n 2) London \n 3) Paris",
    a: 1
}, {
    q: "What is the capital of UK \n  1) Stockholm  \n 2) London \n 3) Paris",
    a: 2
}];
var result = 0,
    i;

function askQuestion(question) {
    "use strict";
    var answer;
    answer = Number(question.q);
    do {
        answer = Number(prompt(question.q));
    } while (isNaN(answer));
    /*return prompt(question.q);*/
    return answer;
}

function checkAnswer(answer, question) {
    "use strict";
    if (answer === question.a) {
        alert("correct");
        result = result + 1;
    } else {
        alert("incorrect, the correct was " + question.a);
    }
}

function showResult() {
    "use strict";
    var currentQuestion,
        answer;
    alert("Well done you scored" + result + "points");
    for (i = 0; i < 3; i = i + 1) {
        currentQuestion = questions.pop;
        answer = askQuestion(currentQuestion);
        checkAnswer(answer, currentQuestion);
    }
}
showResult();
/*
var currentQuestion = questions.pop();
checkAnswer(3, currentQuestion);

*/