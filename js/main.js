// 이미지 및 콘텐츠 로딩 체크
window.onload = function() {
    // AOS 초기화
    AOS.init();
  }
  

  var interleaveOffset = 0.5;

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


$('.swiper').on('mouseenter',function(){
  swiper.autoplay.stop();
});

$('.swiper').on('mouseleave',function(){
  swiper.autoplay.start();
  
});

