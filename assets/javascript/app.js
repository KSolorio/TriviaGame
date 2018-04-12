$(document).ready(function(){
   //Hide questions when page is loaded 
    $('.page-1').hide();
    $('.main-section').hide();
    $('#countdown').hide();
    $('.result').show();


    //play audio when start button is clicked
    var audio = new Audio('./assets/audio/SuperMarioBros.mp3');
    var loserAudio = new Audio('./assets/audio/loser.mp3');
    var winnerAudio = new Audio('./assets/audio/winner.mp3');
    
    //when start button is cliked 
    $('#start-button').click(function() {
      audio.play();
      $('.main-section').show();
      $('.page-1').hide();
      $('#countdown').show();
      $('.result').hide();
    }); 

    


  });
