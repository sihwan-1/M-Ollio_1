$('.start-popup').addClass('close'); // 임시

// start popup 스크립트
function Popup_close() {
  $('.popup-close > p').click(function () {
    $('.start-popup').addClass('close');
  });
}
Popup_close();



$(window).on('scroll', function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > 20) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
});


function Coupon_close() {
  $('.coupon-close').click(function () {
    $('.coupon').addClass('close');
  });
}
Coupon_close();

function M_menu() {
  $('.side-menu > nav > ul > li').click(function() {
    let $this = $(this);
    
    $this.siblings('.hover').removeClass('hover');
    
    if ( $this.hasClass('hover') ) {
      $this.removeClass('hover');
    }
    else {
      $this.addClass('hover');
    }
  });
  
  $('.side-menu > nav > ul > li > ul').click(function() {
    return false;
  });
}

M_menu();

function Side_menu() {
  $('.m-menu').click(function () {
    $('.side-menu').addClass('active');
    $('.bg').addClass('blur');
    $('body').addClass('no-scroll');

    if ($('.search-m').hasClass('active')) {
      $('.search-m').removeClass('active');
    }
  });

  $('.close-btn').click(function (e) {
    e.stopPropagation();
    $('.side-menu').removeClass('active');
    $('.bg').removeClass('blur');
    $('body').removeClass('no-scroll');
  });
}
Side_menu();

function Search_m() {
  $('.search-btn').click(function (e) {
    e.stopPropagation();
    $('.search-m').addClass('active');
    $('header').addClass('on');
    $('.side-menu').removeClass('active');
  });

}
Search_m();

$(window).on('scroll', function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > 20) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
});

function Swiper_2_m() {
  var swiper = new Swiper(".swiper-2-m", {
    slidesPerView: 1.5,
    spaceBetween: 14,
  });
}
Swiper_2_m();

function Swiper_3_m() {
  var swiper = new Swiper(".swiper-3-m", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-box-3-m .swiper-button-next",
      prevEl: ".swiper-box-3-m .swiper-button-prev",
    },
  });
}
Swiper_3_m();

function Swiper_4_m() {
  var swiper = new Swiper(".swiper-4-m", {
    slidesPerView: 1.5,       // 양옆이 보이도록
    spaceBetween: 20,
    centeredSlides: true,     // 가운데 정렬
    loop: true,
  });
}
Swiper_4_m();

function Swiper_5_m() {
  var swiper = new Swiper(".swiper-5-m", {
    slidesPerView: 1.5,
    spaceBetween: 14,
  });
}
Swiper_5_m();

function Swiper_8_m() {
  var swiper = new Swiper(".swiper-8-m", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
}

Swiper_8_m();

function Fotter_menu() {
  $('.cs-btn').click(function () {
    $('.cs-center-m > ul').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('.company-btn').click(function () {
    $('.txt').toggleClass('open');
    $(this).toggleClass('open');
  });
}
Fotter_menu();

