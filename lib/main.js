'use strict';

document.addEventListener('DOMContentLoaded', function () {
    
    const burger = document.querySelector('.navbar-burger');
    const navMenu = document.getElementById('navMenu');

    burger.addEventListener('click', () => {
      navMenu.classList.toggle('navbar-menu--active')
      burger.classList.toggle("is-active")
    })

    $(document).ready(function(){
      $("#menu").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 700);
      });
  });


});