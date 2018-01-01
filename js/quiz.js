angular.module('quizApp', [])
  .controller('QuizController', function() {

    var quiz = this;

    quiz.currentQuestion = 0;

    quiz.questions = [
      {image:'indianajones.jpg', options: [ 'Star Wars', 'Jurassic Park', 'Predetors', 'Raiders of the lost ark' ], correct: 3},
      {image:'starwars.jpg', options: [ 'Moonligthning', 'Star Wars', 'Star Trek', 'Raiders of the lost ark' ], correct: 1},
      {image:'backtothefuture.jpg', options: [ 'Back to the future', 'The Goonies', 'Gremlins', 'Teenwolf' ], correct: 0}
    ];

    quiz.counter = null;

    quiz.previous = function () {
      quiz.currentQuestion = quiz.currentQuestion - 1;
    }
    quiz.next = function () {
      quiz.currentQuestion = quiz.currentQuestion + 1;
      if (quiz.currentQuestion == quiz.questions.length) {
        // last question. correct the quiz.

        quiz.counter = 0;
        for (var i = 0; i < quiz.questions.length; i++) {
            if (quiz.questions[i].answer == quiz.questions[i].correct) {
              quiz.counter++;
            }
        }

      }
    }
    quiz.restart = function() {
        quiz.counter = null;
        quiz.currentQuestion = 0;
        for (var i = 0; i < quiz.questions.length; i++) {
          delete quiz.questions[i].answer;
        }
    }

});
