

function myFunction() {
    document.getElementById("myP").style.color = "magenta";
  }
// картинке в блоке "о нас"

$(document).scroll(() => {
    if ($(window).scrollTop() > 600) {
      $(".img-first").addClass("img-showing");
    }
  });

  $(document).scroll(() => {
    if ($(window).scrollTop() > 1300) {
      $(".img-second").addClass("img-showing");
    }
  });