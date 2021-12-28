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

// AWAL COUNTDOWN TIMER
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 14, 2022 07:00:00").getTime();

  // Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
var now = new Date().getTime();
    
  // Find the distance between now and the count down date
var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + " Hari " + hours + " Jam "
  + minutes + " Menit " + seconds + " Detik ";
    
  // If the count down is over, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
// AKHIR COUNTDOWN TIMER

// AWAL BACKGROUND MUSIK
var musik=new Audio();
musik.src="assets/media/WeddingStoryMusic.mp3";
musik.loop=true;
musik.pause();

function mulaiAudio(){
  var play=document.getElementById("bukaundangan");
  var play=document.getElementById("play");

  play.addEventListener('click', fplay);
  bukaundangan.addEventListener('click', fplay);

  function fplay(){
    if(musik.paused){
      musik.play();
      play.style.background="url(assets/font/mute.svg)";
      play.style.backgroundSize = "cover";
      play.style.backgroundRepeat = "no-repeat";
    }else{
      musik.pause();
      play.style.background="url(assets/font/play.svg)";
      play.style.backgroundSize = "cover";
      play.style.backgroundRepeat = "no-repeat";
    }
  }
}
window.addEventListener('load', mulaiAudio);
// AKHIR BACKGROUND MUSIK

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(document).ready(function() {
  
  $("#tombol").click(function() {
    $("#copy").text("Berhasil di salin");
  })
  $("#tombol2").click(function() {
    $("#copy2").text("Berhasil di salin");
  })

});

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}