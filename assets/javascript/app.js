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
    var unanswered = 0;
    var question = 'none';
    var input = 'none';
    var answer = 'none';
    
    //when start button is cliked 
    $('#start-button').click(function() {
      $('.main-section').show();
      $('.page-1').hide();
      $('#countdown').show();
      $('.result').hide();
      audio.play();
      start();

      
      var seconds = 20; 
     
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
         hurryAudio.pause();
         $('.main-section').hide();
         $('.result').show();
         $('#countdown').hide();
         $('#final').text('correct:'+ correct + '   ' + 'incorrect:' + incorrect + '   ' + ' unanswered:' + unanswered);
        console.log(correct);
        }
        else if (seconds === 15) {
          audio.pause();
          hurryAudio.play();
        }
      }
       //function for stopping the timer
      function stop() {
        clearInterval(counter);
      }
     
    }); 
    
     //function to check answers
     
     

      

    //when submit button is cliked
    $('#submit').click(function() {
      $('.main-section').hide();
      $('.page-1').hide();
      $('#countdown').hide();
      $('.result').show();  
      //checkAnswers();
      audio.pause();
      hurryAudio.pause();
      $('#final').text('correct:'+ correct + '   ' + 'incorrect:' + incorrect + '   ' + ' unanswered:' + unanswered);
        console.log(correct);
        }); 

    //if 6 or more correct play winner audio

    //if 5 or less correct play loser audio


    
      
  });
