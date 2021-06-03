const tabsBtn =  document.querySelectorAll('.tabs__item');
const tabsBlocks =  document.querySelectorAll('.tabs__block');
$(document).ready(function(){
   tabsBtn.forEach(function (item){
      
      item.addEventListener('click', function(){
         let currentTab = document.querySelector(item.getAttribute("data-tab")+'');
         tabsBtn.forEach(function(item){
            item.classList.remove('active');
         });
         tabsBlocks.forEach(function(item){
            item.classList.remove('active');
         });
         item.classList.add('active');
         currentTab.classList.add('active');
      })
   });

   $('.team__slider').slick({
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots:true,
      responsive: [
         {
           breakpoint: 1070,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
           }
         },
         {
           breakpoint: 786,
           settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           }
         }
       ]
   });
   $("body").on('click', '[href*="#"]', function(e){
      var fixed_offset = 100;
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
      e.preventDefault();
    });
   $('.header__burger').on('click', function(){
      $('.header__contacts').toggleClass('menu-active');
   });
   document.querySelector('.tabs__item').click();
});

