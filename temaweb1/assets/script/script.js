// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Awal Efect Salju

// Akhir Efect Salju

// background Music
var musik=new Audio();
musik.src="../media/WeddingStoryMusic.mp3";
musik.loop=true;
musik.play();

function mulaiAudio(){
  var play=document.getElementById("play");

  play.addEventListener('click', fplay);

  function fplay(){
    if(musik.paused){
      musik.play();
      play.style.background="url(../font/mute.png)";
      play.style.backgroundSize = "cover";
      play.style.backgroundRepeat = "no-repeat";
    }else{
      musik.pause();
      play.style.background="url(../font/play.png)";
      play.style.backgroundSize = "cover";
      play.style.backgroundRepeat = "no-repeat";
    }
  }
}
window.addEventListener('load', mulaiAudio);
// Akhir Background Music