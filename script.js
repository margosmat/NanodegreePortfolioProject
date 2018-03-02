// script.js

$(".nav_button").click(function() {
  toggleNav();
});

$("section").click(function() {
  if($("section").hasClass("nav_opened"))
  toggleNav();
});

function toggleNav() {
  $("nav").toggleClass("nav_opened");
  $(".nav_button").toggleClass("nav_opened");
  $(".nav_button_arrow").toggleClass("nav_opened");
  $("section").toggleClass("nav_opened");
}
