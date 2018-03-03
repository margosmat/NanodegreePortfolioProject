// script.js

$(".nav-button").click(function() {
  toggleNav();
});

$(".main-image").click(function() {
  if($(".main-image").hasClass("nav-opened"))
  toggleNav();
});

$(".featured-work").click(function() {
  if($(".featured-work").hasClass("nav-opened"))
  toggleNav();
});

$(".footer").click(function() {
  if($(".footer").hasClass("nav-opened"))
  toggleNav();
});

/**
* @description Adds "nav-opened" class to specified elements
*/
function toggleNav() {
  $("nav").toggleClass("nav-opened");
  $(".nav-button").toggleClass("nav-opened");
  $(".nav-button-arrow").toggleClass("nav-opened");
  $(".main-image").toggleClass("nav-opened");
  $(".featured-work").toggleClass("nav-opened");
  $(".footer").toggleClass("nav-opened");
}
