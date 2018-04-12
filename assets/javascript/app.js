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
    var hurryAudio = new Audio('./assets/audio/hurr.mp3');
    
    //when start button is cliked 
    $('#start-button').click(function() {
      audio.play();
      $('.main-section').show();
      $('.page-1').hide();
      $('#countdown').show();
      $('.result').hide();
    }); 

    //timer funciton
    var timeLeft = 60;
    var timer = setInterval(function() {
      document.getElementById('#timer').value = 60 - --timeLeft;
        if (timeLeft <= 0)
          clearIntervla(timer);
    }, 10000);
      
    timer; 
     
  });
