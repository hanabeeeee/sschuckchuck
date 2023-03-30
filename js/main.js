$(document).ready(function(){

    clientW = $("body").width();

   if(clientW == 1180){
      $("#main_visual").css("height","900px");
   }
});

$(document).ready(function(){
   const swiper = new Swiper('.swiper', {
     spaceBetween: 30,
     centeredSlides: true,

       autoplay: {
         delay: 3500,
         disableOnInteraction: false,
       },
       
       direction: 'horizontal',  // 효과
       loop: true,

       effect: 'slide',

       pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable : true,
       },
       
     });
});

$(document).ready(function(){
  const swiper_ = new Swiper('.swiper-', {
    spaceBetween: 30,
    centeredSlides: true,

      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      
      direction: 'horizontal',  // 효과
      loop: true,

      effect: 'fade',

      navigation: {   // 버튼 사용자 지정

        nextEl: '.swiper-button-next',
       
        prevEl: '.swiper-button-prev',
      },

      
    });
});

