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
});


gsap.to(".mainText", {
  y:100
});
