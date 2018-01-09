angular.module('quizApp', [])
  .controller('QuizController', function() {

    var quiz = this;

    quiz.mode = 'image';

    quiz.changeMode = function (mode) {
      quiz.mode = mode;
      quiz.questions = questions[quiz.mode];
      quiz.restart();
    }

    quiz.currentQuestion = 0;

    var questions = {
      'image': [
        {file:'indianajones.jpg', options: [ 'Star Wars', 'Jurassic Park', 'Predetors', 'Raiders of the lost ark' ], correct: 3, answer: null},
        {file:'starwars.jpg', options: [ 'Moonligthning', 'Star Wars', 'Star Trek', 'Raiders of the lost ark' ], correct: 1, answer: null},
        {file:'backtothefuture.jpg', options: [ 'Back to the future', 'The Goonies', 'Gremlins', 'Teenwolf' ], correct: 0, answer: null}
      ],
      'video': [
        {file:'indianajones.mp4', options: [ 'Star Wars', 'Jurassic Park', 'Predetors', 'Raiders of the lost ark' ], correct: 3, answer: null},
        {file:'starwars.mp4', options: [ 'Moonligthning', 'Star Wars', 'Star Trek', 'Raiders of the lost ark' ], correct: 1, answer: null},
        {file:'backtothefuture.mp4', options: [ 'Back to the future', 'The Goonies', 'Gremlins', 'Teenwolf' ], correct: 0, answer: null}
      ],
      'audio': [
        {file:'indianajones.mp3', options: [ 'Star Wars', 'Jurassic Park', 'Predetors', 'Raiders of the lost ark' ], correct: 3, answer: null},
        {file:'starwars.jpg', options: [ 'Moonligthning', 'Star Wars', 'Star Trek', 'Raiders of the lost ark' ], correct: 1, answer: null},
        {file:'backtothefuture.jpg', options: [ 'Back to the future', 'The Goonies', 'Gremlins', 'Teenwolf' ], correct: 0, answer: null}
      ]
    }
    quiz.questions = questions[quiz.mode];

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
          quiz.questions[i].answer = null;
        }
    }

});
