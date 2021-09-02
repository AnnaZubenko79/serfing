$(function(){
    
   
   let swiper = new Swiper('.swiper-container', { 
    pagination: { 
       el: '.swiper-pagination', 
       clickable: true, 
    }, 
 });


$(".menu a").on("click", function (event) {              
       event.preventDefault();       
       var id  = $(this).attr('href'),   
        top = $(id).offset().top;               
       $('body,html').animate({scrollTop: top}, 500);
   });
  
   
let menuBtn = document.querySelector(".menu__btn"); 
let body = document.querySelector("body"); 
let menuList = document.querySelector(".menu__list"); 
let headerContainer = document.querySelector(".header__container");
let menuLink = document.querySelector(".menu__link");
if (menuBtn) { 
   menuBtn.addEventListener("click", function() { 
      menuBtn.classList.toggle("menu__btn--active"); 
      body.classList.toggle("lock"); 
      menuList.classList.toggle("menu__list--active"); 
      headerContainer.classList.toggle("header__container--active"); 
   }); 
  } 
     
function myFunction() {
    if ($(window).width() < 768) {
       $('.gallery__container').toggleClass('gallery__container--active');
      } 
   }
myFunction();   
$(window).resize(function(){
   myFunction()
});

$(window).on("scroll", function() {
   $('.header__top').toggleClass("header__top--active", $(this).scrollTop() > $('.header__top').height());
   $('.logo').toggleClass("logo--active", $(this).scrollTop() > $('.header__top').height());
});

$('.menu__link').on('click', function(){
   $('.menu__list').toggleClass('menu__list--active'); 
});

var mixer = mixitup ('.gallery-content', {
        animation: {
            duration: 0.2  
        }          
        });
});

