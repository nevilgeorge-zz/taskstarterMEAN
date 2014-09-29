/*
  ICON AUTO PLAYS
  HOVER OVER ICON
  TO MAKE IT INTERACTIVE
*/

upInteractive = false;

function autoToggle() {
  $('span').toggleClass('auto');
}

$('span').hover(function() {
  upInteractive = true;
  $('span').removeClass('auto');
});