//jQuery code
jQuery(function($) { 

  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#page-preloader').delay(1000).fadeOut('slow');

    $('.title-text').addClass('animation-right');
    $('.title-product').addClass('animation-left');
  });

  // Navigation Collapse
  $('#menu-navbar').on('click', function () {
    $('.navbar-collapse').removeClass('in');
    $('.nav-icon').toggleClass('open');
  });

  // Navigation Icon
  $('.nav-icon').on('click', function () {
    $(this).toggleClass('open');
  });

  initFixedNav();
  initScrollNav()
  InitScroll();
  initParallaxTech();
  initParallaxCTA()
  initAOS();
  initVideo();
  initSlider();
  initPopup();
  initVideoBg();
  initOrder();
  initMail();
  initColorSwitcher();
});

function initColorSwitcher() {  
  var colorSheets = [
    {
      color: "#43bccd",
      title: "Dull Cyan and Mikado Yellow",
      href: "../assets/css/colors/color-1.css"
    },
    {
      color: "#55acee",
      title: "Picton Blue and Sun",
      href: "./assets/css/colors/color-2.css"
    },
    {
      color: "#23d889",
      title: "Shamrock and Faded Blue",
      href: "./assets/css/colors/color-3.css"
    },
    {
      color: "#6e73fc",
      title: "Medium Slate Blue and Shamrock",
      href: "./assets/css/colors/color-4.css"
    },
    {
      color: "#444985",
      title: "East Bay and Watermelon",
      href: "./assets/css/colors/color-5.css"
    },
    {
      color: "#C7D2D6",
      title: "Link Water and Curious Blue",
      href: "./assets/css/colors/color-6.css"
    }
  ];
  ColorSwitcher.init(colorSheets);
}

// Fixed Navigation
function initFixedNav() {

  var navbar = $('.navbar');
  var nav_bg = $('.nav-bg');

  $(window).on('scroll', function () {
    if ( $(this).scrollTop() > 0) {
      navbar.removeClass("navbar-top").addClass("navbar-fix");
      nav_bg.removeClass("top-nav").addClass("fix-nav");
    } 
    else if($(this).scrollTop() <= 0) {
      navbar.removeClass("navbar-fix").addClass("navbar-top");
      nav_bg.removeClass("fix-nav").addClass("top-nav");
    }
  });
}

// Init Scroll Nav
function initScrollNav() {
  $('.smooth-nav').onePageNav({
    scrollSpeed: 2000
  });
}

// Init Scroll
function InitScroll() {
  $('.smooth').smoothScroll({
    speed: 2000
  });
}

// Init Parallax in Technologies Block
function initParallaxTech() {
  $('.technologies').parallax('50%', 0.2);
}

// Init Parallax in CTA Block
function initParallaxCTA() {
  $('.cta-parallax-1').parallax('50%', 0.2);
  $('.cta-parallax-2').parallax('50%', 0.1);
}

// Animate elements
function initAOS() {
  AOS.init({
    duration: 700,
    delay: 300,
    once: true,
    disable: function () {
      var maxWidth = 420;
      return window.innerWidth < maxWidth;
    }
  });
}

// Slider
function initSlider() {

  var slider = $('.flexslider');
  var caption = $('.flex-caption');

  slider.flexslider({
    animation: 'fade',
    slideshowSpeed: 7000,   //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 2000,   //Integer: Set the speed of animations, in milliseconds
    controlNav: false,
    prevText: '',
    nextText: '',

    start: function(){},
    before: function(){captionMoveOut();},
    after: function(){captionMoveIn();},
  });

  caption.hide();
  caption.fadeIn(700);
}

function captionMoveIn() {
  if ($(window).width() >= 768) {
    $('.flex-caption')
      .animate({left: '7.5rem'},0)
      .fadeIn(700)
  }
;};  

function captionMoveOut() {
  if ($(window).width() >= 768) {
    $('.flex-caption')
      .animate({left: '-100%'},900)
      .fadeOut('normal')
  }    
;};

// Notify Popup 
function initPopup() {
  $('.buy-button').magnificPopup({
    type:'inline',
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
}

// Init Video
function initVideo() {
  $('.popup-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
}

// Background Youtube Video
function initVideoBg() {
  if (!device.tablet() && !device.mobile()) {
    $('#video').YTPlayer({
        fitToBackground: true,
        videoId: 'c-oS9DOwGzg',
        playerVars: {
          autoplay: 1,
          showinfo: 0,
          branding: 0
        }
    });
  } else {
      $('#video').addClass('video-mobile-screen');
  }
}

// Email Validate
function validateEmail(email) { 
  var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

// Order Form Validation
function initOrder() {

  var order_form = $('#order-form');
  var order_button = $('#order-button');
  var order_f_name = $('#order-f-name');
  var order_l_name = $('#order-l-name');
  var order_email = $('#order-email');
  var order_address = $('#order-address');
  var order_city = $('#order-city');
  var order_country = $('#order-country');
  var order_state = $('#order-state');
  var order_zip = $('#order-zip');
  var order_phone = $('#order-phone');

  order_form.submit(function() { return false; });
  order_button.on('click', function(){

    // first name
    var firstnameval = order_f_name.val();
    var firstnamelen = firstnameval.length;

    if(firstnamelen < 1) {
      order_f_name.addClass('order-field-error');
    }
    else if(firstnamelen >= 1){
      order_f_name.removeClass('order-field-error');
    }

    // last name
    var lastnameval = order_l_name.val();
    var lastnamelen = lastnameval.length;

    if(lastnamelen < 1) {
      order_l_name.addClass('order-field-error');
    }
    else if(lastnamelen >= 1){
      order_l_name.removeClass('order-field-error');
    }

    // email
    var emailval   = order_email.val();
    var emailvalid = validateEmail(emailval);
    if(emailvalid === false) {
      order_email.addClass('order-field-error');
    }
    else if(emailvalid === true){
      order_email.removeClass('order-field-error');
    }

    // address
    var addressval = order_address.val();
    var addresslen = addressval.length;

    if(addresslen < 1) {
      order_address.addClass('order-field-error');
    }
    else if(addresslen >= 1){
      order_address.removeClass('order-field-error');
    }

    // city
    var cityval = order_city.val();
    var citylen = cityval.length;

    if(citylen < 1) {
      order_city.addClass('order-field-error');
    }
    else if(citylen >= 1){
      order_city.removeClass('order-field-error');
    }

    // country
    var countryval = $('#order-country option:selected').val();

    if(countryval == 0 ) {
      order_country.addClass('order-field-error');
    }
    else if(countryval != 0){
      order_country.removeClass('order-field-error');
    }

    // state
    var stateval = order_state.val();
    var statelen = stateval.length;

    if(statelen < 1) {
      order_state.addClass('order-field-error');
    }
    else if(statelen >= 1){
      order_state.removeClass('order-field-error');
    }

    // zip
    var zipval = order_zip.val();
    var ziplen = zipval.length;

    if(ziplen < 1) {
      order_zip.addClass('order-field-error');
    }
    else if(ziplen >= 1){
      order_zip.removeClass('order-field-error');
    }

    // phone
    var phoneval = order_phone.val();
    var phonelen = phoneval.length;

    if(phonelen < 1) {
      order_phone.addClass('order-field-error');
    }
    else if(phonelen >= 1){
      order_phone.removeClass('order-field-error');
    }

    if(firstnamelen >= 1 && lastnamelen >= 1 && emailvalid === true && addresslen >= 1 && citylen >= 1 && countryval != 0 && statelen >= 1 && ziplen >= 1 && phonelen >= 1) {
      order_button.replaceWith("<span class='order-send'>send...</span>");
      $.ajax({
        type: 'POST',
        url: 'order.php',
        data: order_form.serialize(),
        success: function(data) {
          if(data === 'true') {
            order_form.fadeOut('fast', function(){
              $(this).before("<p>Thank you for your order!</p><span class='order-send'><svg class='check' width='44px' height='22px' viewBox='0 0 59 42' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'><path d='M4.5,20.5 L21.0302753,37.0302753 L54.5,4.5' id='line' stroke='#fff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' sketch:type='MSShapeGroup'></path></g></svg></span>");
            });
          }
        }
      });
    }
  });
}

// Newsletter Form Validation
function initMail() {

  var newsletter_form = $('#newsletter-form');
  var newsletter_submit = $('#newsletter-submit');
  var newsletter_email = $('#newsletter-email');
  var error_message = $('.nf-error-message');

  newsletter_form.submit(function() { return false; });
  newsletter_submit.on('click', function(){

    var emailval   = newsletter_email.val();
    var emailvalid = validateEmail(emailval);

    if(emailvalid === false) {
      error_message.addClass("nf-error");
    }
    else if(emailvalid === true){
      error_message.removeClass('nf-error');
    }

    if(emailvalid === true) {
      newsletter_submit.replaceWith("<span class='nf-send'>send...</span>");
      $.ajax({
        type: 'POST',
        url: 'newsletter.php',
        data: newsletter_form.serialize(),
        success: function(data) {
          if(data === 'true') {
            $('.nf-send').fadeOut('fast', function(){
              $(this).before("<span class='nf-success'><svg class='check' width='44px' height='22px' viewBox='0 0 59 42' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'><path d='M4.5,20.5 L21.0302753,37.0302753 L54.5,4.5' id='line' stroke='#fff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' sketch:type='MSShapeGroup'></path></g></svg></span>");
            });
          }
        }
      });
    }
  });
}