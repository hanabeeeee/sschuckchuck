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
          $("#dosu .text").css("top","60px");

          $("#interior .text h1").css("font-size","80px");
          $("#interior .text h5").css("font-size","40px");
          $("#interior .text").css("top","40px");
          $("#interior").css("padding-top","40px");
          $("#interior").css("height","1060px");

          $("#time .time_text h1").css("font-size","80px");
          $("#time .time_text h5").css("font-size","40px");
          $("#time .time_text").css("top","120px");

          $("#doctors").css("height","1250px");
          $("#doctors .text h1").css("font-size","80px");
          $("#doctors .text h5").css("font-size","40px");
          $("#doctors .container").css("bottom","0px");

          $("header").css("height", "160px")
          $("header .logo img").css("width", "500px")
          $("header .kakao").css("width", "120px")
          $("header .kakao").css("top", "30px")
          $("header .logo").css("top", "30px")
          $("header .logo").css("left", "490px")
          $("header .call p").css("font-size", "42px")
          $("header .call span").css("font-size", "36px")
          $("header .call").css("line-height", "30px")
          $("header .call").css("top", "38px")
          $("header .logo img").css("width", "500px")
          $("header .logo").css("top", "30px")

          $("#list .list_box h1").css("font-size", "24px")
          $("#list .list_box h1").css("top", "70px")
          $("#list .list_box").css("width", "300px")
          $("#list .list_box").css("zoom", "1.5")
          $("#list .text h1").css("font-size","80px");
          $("#list .text").css("top", "50px")



          $('#list .container').css("width", "90vw")
          $('#list .container img').css("zoom", "0.8")
          $('#list .container img').css("top", "200px")

          $('#fixed_menu').css("width", "100px")
          $('#fixed_menu').css("height", "100px")
          $('#fixed_menu').css("right", "20px")
          $('#fixed_menu').css("bottom", "50px")
          $('#fixed_menu .material-symbols-outlined').css("font-size", "80px")
          $('#fixed_menu .material-symbols-outlined').css("top", "10px")
       }
    });
      
    // $('#list .container').slick({
    //   dots: true,
    //   prevArrow: $('.prev'),
    //   nextArrow: $('.next'),
    //   centerMode: true,
    //   centerPadding: '60px',
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   infinite: true,
    //   autoplay: true,
    //   autoplaySpeed: 5000,
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: true,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 4
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
    // });

    // if (slideIndex !== 0){
    //   slideIndex--;
    // }

    // $('#list').slick('goTo', index);
});




// $(document).ready(function(){
//   var currentPosition = parseInt($("#fixed_menu").css("top"));
//   $(window).scroll(function() {
//     var position = $(window).scrollTop(); 
//     $("#fixed_menu").stop().animate({"top":position+currentPosition+"px"},2500);
//   });
// });


$(function(){
  // 스크롤 시 fixed_menu
  $(document).on('scroll', function(){
      if($(window).scrollTop() > 1000){
          $("#fixed_menu").removeClass("deactive");
          $("#fixed_menu").addClass("active");
      }else{
          $("#fixed_menu").removeClass("active");
          $("#fixed_menu").addClass("deactive");
      }
  })
});
