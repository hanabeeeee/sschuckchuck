// 이미지 및 콘텐츠 로딩 체크
window.onload = function() {
    // AOS 초기화
    AOS.init();
  }
  

  var interleaveOffset = 0.5;

  $(document).ready(function(){
    const swiper_ = new Swiper('#main_visual .swiper', {
      spaceBetween: 30,
      centeredSlides: true,

        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        
        direction: 'horizontal',  // 효과
        loop: true,

        effect: 'slide',

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
      });
});


  $(document).ready(function(){
    const swiper = new Swiper('#interior .swiper', {
      spaceBetween: 30,
      centeredSlides: true,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        
        direction: 'horizontal',  // 효과
        loop: true,

        effect: 'fade',
        
      // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
      });

      $(document).ready(function(){

        clientW = $("body").width();
    
       if(clientW == 1180){
          $("#dosu .text h1").css("font-size","80px");
          $("#dosu .text h5").css("font-size","40px");
          $("#dosu .text").css("top","40px");

          $("#interior .text h1").css("font-size","80px");
          $("#interior .text h5").css("font-size","40px");
          $("#interior .text").css("top","40px");

          $("#time .time_text h1").css("font-size","80px");
          $("#time .time_text h5").css("font-size","40px");
          $("#time .time_text").css("top","120px");

          $("header").css("height", "160px")
          $("header img").css("width", "500px")
          $("header img").css("top", "30px")

          $("#main_visual img").css("magin", "auto")
          $("#main_visual").css("width", "100vw")




       }
    });
      
    
});


gsap.to(".mainText", {
  y:100
});
