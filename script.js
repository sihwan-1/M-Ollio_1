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
  });

  $('.close-btn').click(function () {
    $('.side-menu').removeClass('active');
  });
}
Side_menu();

$('.close-btn').click(function () {
  console.log("ddd");
});
