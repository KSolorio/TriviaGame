$(document).ready(function(){
   //Hide questions, timer, and results when page is loaded 
    $('.page-1').show();
    $('.main-section').hide();
    $('#countdown').hide();
    $('.result').hide();



    //audio files for trivia
    var audio = new Audio('./assets/audio/SuperMarioBros.mp3');
    var loserAudio = new Audio('./assets/audio/loser.mp3');
    var winnerAudio = new Audio('./assets/audio/winner.mp3');
    var hurryAudio = new Audio('./assets/audio/hurry.mp3');
    
    //variables
    var incorrect = 0;
    var correct = 0; 
    
    //when start button is cliked 
    $('#start-button').click(function() {
      $('.main-section').show();
      $('.page-1').hide();
      $('#countdown').show();
      $('.result').hide();
      audio.play();
      start();

      
      var seconds = 5; 
     
     //function when start button is clicked
      function start() {
        counter = setInterval(timer, 1000);
      }
     //function for the actual timer
      function timer() {
       seconds--;
       $('#timer').html( seconds );
       //when time runs out
       if (seconds === 0) {
         stop();
        }
      }
       //function for stopping the timer
      function stop() {
        clearInterval(counter);
      }
     
    }); 
    
    // //function to check answers
    //   function checkAnswers() {

    //   }

    //when submit button is cliked
    $('#submit').click(function() {
      $('.main-section').hide();
      $('.page-1').hide();
      $('#countdown').hide();
      $('.result').show();  
      
      // checkAnswers();
      audio.pause();
      
      //not working
      $('#final').text('correct:'+ correct + '   ' + 'incorrect: ' + incorrect);
        console.log(correct);
        }); 

    //if 6 or more correct play winner audio

    //if 5 or less correct play loser audio


    
      
  });
