// script.js

$(".nav_button").click(function() {
  $("nav").toggleClass("nav_opened");
  $(".nav_button").toggleClass("nav_opened");
  $("main").toggleClass("nav_opened");
});
