// script.js

$(".nav_button").click(function() {
  toggleNav();
});

$("main").click(function() {
  if($("main").hasClass("nav_opened"))
  toggleNav();
});

function toggleNav() {
  $("nav").toggleClass("nav_opened");
  $(".nav_button").toggleClass("nav_opened");
  $(".nav_button_arrow").toggleClass("nav_opened");
  $("main").toggleClass("nav_opened");
}
