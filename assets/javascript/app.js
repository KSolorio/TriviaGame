$(document).ready(function(){
    //Hide questions, timer, and results when page is loaded 
    $('.page-1').show();
    $('.main-section').hide();
    $('#countdown').hide();
    $('.result').hide();
 

    //audio files for trivia
    var audio = new Audio('./assets/audio/SuperMarioBros.mp3');
    
    
    //when start button is cliked 
    $('#start-button').click(function() {
      $('.main-section').show();
      $('.page-1').hide();
      $('#countdown').show();
      $('.result').hide();
      audio.play();
      start();


      //variable for timer 
      var seconds = 60; 
     
      //function when start button is clicked
      function start() {
        counter = setInterval(timer, 1000);
      };
     
      //function for the actual timer
      function timer() {
       seconds--;
       $('#timer').html( seconds );
       //when time runs out
       if (seconds === 0) {
         stop();
         checkAnswers();
         $('.main-section').hide();
         $('.result').show();
         $('#countdown').hide();
        audio.pause();
        }
      };

      //function for stopping the timer
      function stop() {
        clearInterval(counter);
      };
     
      //function to check answers
      function checkAnswers() {
        var q1 = document.quiz.q1.value;
        var q2 = document.quiz.q2.value;
        var q3 = document.quiz.q3.value;
        var q4 = document.quiz.q4.value;
        var q5 = document.quiz2.q5.value;
        var q6 = document.quiz2.q6.value;
        var q7 = document.quiz2.q7.value;
        var q8 = document.quiz2.q8.value;
      
        var correct = 0;
        var incorrect = 0;

        if (q1 == 'b') {
        correct++;
        }
        else {
        incorrect++;
        };

        if (q2 == 'c') {
        correct++;
        }
        else {
        incorrect++;
        };

        if (q3 == 'a') {
        correct++;
        }
        else {
        incorrect++;
        };

        if (q4 == 'b') {
        correct++;
        }
        else {
        incorrect++;
        };

        if (q5 == 'b') {
        correct++;
        }
        else {
        incorrect++;
        };

        if (q6 == 'c') {
        correct++;
        }
        else {
        incorrect++;
        };

        if (q7 == 'a') {
        correct++;
        }
        else {
        incorrect++;
        };

        if (q8 == 'a') {
        correct++;
        }
        else {
        incorrect++;
        };

      document.getElementById('correct').innerHTML = ('correct: ' + correct);
      document.getElementById('incorrect').innerHTML =('incorrect: ' + incorrect);
      
    };
      //when submit button is cliked
      $('#submit').click(function() { 
        checkAnswers();
        $('.result').show();
        $('.main-section').hide();
        $('#countdown').hide();
        stop();
        audio.pause();
      });

    }); 

});

