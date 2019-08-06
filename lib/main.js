'use strict';

document.addEventListener('DOMContentLoaded', function () {
    
  //  Мобильное меню

    const burger = document.querySelector('.navbar-burger');
    const navMenu = document.getElementById('navMenu');

    burger.addEventListener('click', () => {
      navMenu.classList.toggle('navbar-menu--active')
      burger.classList.toggle("is-active")
    })

  // Плавный переход на якорях

    $(document).ready(function(){
      $("#menu").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 700);
      });
  })

// Дроп дауны

var dropdown = document.querySelectorAll('.dropdown');
dropdown.forEach(element => {
  element.addEventListener('click', function(event) {
    event.stopPropagation();
    element.classList.toggle('is-active');
  });    
});

// Дроп дауны для таблиц

let hideButton = document.querySelectorAll('.hide')
let tables = document.querySelectorAll('.tableButton')
hideButton.forEach(element => {
  element.addEventListener('click', function() {
    let target = element.dataset.target;
    checKForTable(target);
  });  
});

function checKForTable(target) {
  tables.forEach(element => {
    if (element.dataset.table === target) {
      element.classList.toggle("dispnon")
    } 
  })
}

});