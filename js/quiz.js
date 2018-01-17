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
        {file:'indianajones.jpg', options: [ 'Tomb Raider', 'Jurassic Park', 'Predetors', 'Raiders of the lost ark' ], correct: 3, answer: null},
        {file:'starwars.jpg', options: [ 'John Carter', 'Star Wars', 'Star Trek', 'Starcrash' ], correct: 1, answer: null},
        {file:'backtothefuture.jpg', options: [ 'Back to the future', 'The Goonies', 'Gremlins', 'Teenwolf' ], correct: 0, answer: null},
        {file:'thorthedarkworld.jpg', options: [ 'Avengers ', 'Thor: The Dark World', 'Lord Of The Rings', 'The Hobbit' ], correct: 1, answer: null},
        {file:'pulpfiction.jpg', options: [ 'The Usual Suspects', 'True Romance', 'Pulp Fiction', 'Get Shorty' ], correct: 2, answer: null},
        {file:'fantasticbeasts.jpg', options: [ 'Harry Potter And Then Deathly Hallows', 'Fantastic Beast And Where To Find Them', 'Alice Through the Looking Glass', 'King Arthur: Legend of the Sword' ], correct: 1, answer: null},
        {file:'thelegendoftarzan.jpg', options: [ 'The Jungle Book', 'Kong: Skull Island', 'King Arthur: Legend of the Sword', 'The Legend Of Tarzan' ], correct: 3, answer: null},
        {file:'x-men.jpg', options: [ 'X-Men: Days Of Future Past', 'Fantastic Four', 'Terminator: Genisys', 'Pirates of the Caribbean: Dead Men Tell No Tales' ], correct: 0, answer: null},
        {file:'bighero6.jpg', options: [ 'Monsters vs Aliens', 'Megamind', 'Big Hero 6', 'How to Train Your Dragon' ], correct: 2, answer: null},
        {file:'spiderman.jpg', options: [ 'Spider-Man: Homecoming', 'Guardians of the Galaxy', 'Avengers: Infinity War', 'Ant-Man' ], correct: 0, answer: null}
      ],
      'video': [
        {file:'furious7.mp4', options: [ 'Furious 7', 'Jason Bourne', 'San Andreas ', 'Need For Speed' ], correct: 0, answer: null},
        {file:'mazerunner.mp4', options: [ 'After Earth', 'The Maze Runner', 'I Am Number Four', 'Divergent' ], correct: 1, answer: null},
        {file:'independenceday.mp4', options: [ '2012', 'Independence Day: Resurgence', 'Jaws', 'The Day After Tomorrow' ], correct: 1, answer: null},
        {file:'indianajones.mp4', options: [ 'Shawshank Redemption', 'Jurassic Park', 'Raiders of the lost ark', 'Predetors' ], correct: 2, answer: null},
        {file:'kingarthur.mp4', options: [ 'King Arthur: Legend of the Sword', 'Excalibur', 'Merlin and the War of the Dragons', 'The Last Legion' ], correct: 0, answer: null},
        {file:'realsteel.mp4', options: [ 'I, Robot', 'Robocop', 'Chappie', 'Real Steel' ], correct: 3, answer: null},
        {file:'spiritedaway.mp4', options: [ 'Princess Mononoke', 'My Neighbor Totoro', 'Spirited Away', 'Howl\'s Moving Castle' ], correct: 2, answer: null},
        {file:'teenagemutantninjaturtle.mp4', options: [ 'Teenage Mutant Ninja Turtle: Out of the Shadows', 'Power Ranger', 'Transformers: Age of Extincion', 'Total Recall' ], correct: 0, answer: null},
        {file:'thegodfather.mp4', options: [ 'Goodfellas', 'The Godfather', 'Donnie Brasco', 'The Freshman' ], correct: 1, answer: null},
        {file:'thelegendoftarzan.mp4', options: [ 'The Jungle Book', 'Hercules', 'The Legend of Tarzan', 'Kong: Skull Island' ], correct: 2, answer: null}
      ],
      'audio': [
        {file:'thehobbit.mp3', options: [ 'King Kong', 'The Hobbit', 'Jack the Giant Slayer', 'Warcraft' ], correct: 1, answer: null},
        {file:'spiderman.mp3', options: [ 'Spider-Man', 'X-Men', 'Daredevil', 'The Avengers' ], correct: 0, answer: null},
        {file:'it.mp3', options: [ 'Annabelle', 'It', 'It Follows', 'Jigsaw' ], correct: 1, answer: null},
        {file:'indianajones.mp3', options: [ 'Predetors', 'Raiders Of The Lost ark', 'Tomb Raider', 'Jurassic Park' ], correct: 1, answer: null},
        {file:'kongskullisland.mp3', options: [ 'Pacific Rim', 'The Great Wall', 'Kong: Skull Island', 'Godzilla' ], correct: 2, answer: null},
        {file:'tokyodrift.mp3', options: [ 'Los Bandoleros', 'Turbo Charged Prelude', 'The Fast and the Furious: Tokyo Drift', 'Born To Race' ], correct: 2, answer: null},
        {file:'kingsman.mp3', options: [ 'Kingsman: The Secret Service ', 'The Man from U.N.C.L.E.', 'Spectre', 'Mission: Impossible' ], correct: 0, answer: null},
        {file:'avatar.mp3', options: [ 'Tron: Legacy', 'Avatar', 'Aliens', 'Ender\'s Game' ], correct: 1, answer: null},
        {file:'homealone.mp3', options: [ 'Baby\'s Day out', 'Uncle Buck', 'Home Alone', 'Free Willy' ], correct: 2, answer: null},
        {file:'ghostbusters.mp3', options: [ 'Ghostbusters', 'Coneheads', 'Gremlins', 'Groundhog Day' ], correct: 0, answer: null},
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
