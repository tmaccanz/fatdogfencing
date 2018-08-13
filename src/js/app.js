import { TweenLite, Power1, TweenMax, TimelineMax, TimelineLite } from 'gsap';
import Swiper from 'swiper';

const gsap = require('gsap');
  require('animation.gsap');
  require('debug.addIndicators');
const $ = require('jquery');
const ScrollMagic = require('ScrollMagic');
const mapsapi = require( 'google-maps-api' )( 'AIzaSyBMrBP0irD3XSwAUHbK5t8Mckz6KD7FWlg' );


/* Sticky Menu
   ============================================================================= */

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.mobile-menu').addClass("mobile--sticky");
    } else {
        $('.mobile-menu').removeClass("mobile--sticky");
    }
});

/* mobile-menu
   ============================================================================= */
   
$('.nav__menu-mobile-icon').click(function(e){
    $('.mobile-menu').toggleClass('mobile-menu--open');
});
$('.mobile-menu__container a').click(function(e){
    $('.mobile-menu').toggleClass('mobile-menu--open');
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('nav').addClass("sticky");
    } else {
        $('nav').removeClass("sticky");
    }
});

/* Smooth-scroll
 ============================================================================= */

 $(function () {
    $('.nav__link-container a, .landing__down-arrow, .footer__arrow-container[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 68
                }, 1000);
                return false;
            }
        }
    });
});

/* Navigation Phone Animation
   ============================================================================= */


$(".phone-container__icon").mouseenter(function(){
    $('.phone-container__text').addClass('phone-container__text--open');
});

$(".phone-container__icon").mouseleave(function(){
    $('.phone-container__text').removeClass('phone-container__text--open');
});

/* Services
   ============================================================================= */

let mySwiper = new Swiper('.swiper-container', {
       
    direction: 'horizontal',
    loop: true,
    simulateTouch:false,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});


/* Gallery
   ============================================================================= */

   var modal = document.querySelector('.gallery-modal');//target modal,
   var modalOverlay = document.querySelector('.gallery__modal-overlay');  //target modal overlay,
   var closeButton = document.querySelector('.modal-overlay__close'); //target close button,
   var modalImage = document.querySelector('.gallery-modal__img'); //target modal image,
   var images = document.querySelectorAll('.image-grid__card');//target images;
   
   //loop through images
   for(var i = 0; i < images.length; i++){
     //in loop, add a 'click' event listener to each image
       images[i].addEventListener('click', openModalEvent);
   }

         
       //in the listener: 
       //1. toggle the 'closed' class on the modal, 
       function openModalEvent(evt){
       modal.classList.toggle('gallery-modal--closed');
       
       //2. toggle the 'closed' class on the modal overlay, and
       modalOverlay.classList.toggle('gallery-modal--closed');
       
       //3. set the value of the src attribute of the modal image to the target of the event's src attribute. 
       //To get the right size you'll need to use this on the src: .replace('300x200', '560x360')
       modalImage.src = evt.target.src.replace('100%x100%', '100%x100%');    
       }
       
   //add a 'click' event listener to the close button
       closeButton.addEventListener('click', closeButtonEvent);
       
     //in the listener: 1. use stopPropagation() on the event (to stop bubbling), 
     
     function closeButtonEvent(){
       closeButtonEvent.stopPropagation();
     //2. toggle the 'closed' class on the modal, and
       modal.classList.toggle('gallery-modal--closed');
       
     //3. toggle the 'closed' class on the modal overlay.
       modalOverlay.classList.toggle('gallery-modal--closed');
       }
       
   //add a 'click' event listener to the modal overlay
       modalOverlay.addEventListener('click', closeModalEvent);
         
     //in the listener: 1. toggle the 'closed' class on the modal, and
     function closeModalEvent(){
       modal.classList.toggle('gallery-modal--closed');
       
       //2. toggle the 'closed' class on the modal overlay.
       modalOverlay.classList.toggle('gallery-modal--closed');
       }



   /* Quote
 ============================================================================= */  

 var slideOutput = function () {

    var amount, percent, result;
    var calculator = $('.quote-container');
    var sliderRange = calculator.find('.quote-range__input');
    var calculatorResult = calculator.find('.quote__output');
    var rangeValue = calculator.find('.quote-range__value');
    var selectTimber = $("#sources").val("option1");
  
    sliderRange.on('change', function () {
  
  
        selectTimber = 90;
        rangeValue.text(sliderRange.val());
        percent = sliderRange.val() * 1;
        result = (selectTimber * percent) + 10;
        calculatorResult.text(result);
    });
  
  };

  slideOutput();
  
  
  var timberSlider = function () {
    var slider = $('.quote-slider__quote-range'),
        range = $('.quote-range__input'),
        value = $('.quote-range__value');
        var quoteFence = document.getElementById('quote-timber-fence');
        var tlQuote = new TimelineLite;
        tlQuote.set(quoteFence, { x: "-100%"}); 
  
    slider.each(function () {
  
  
        range.on('input', function () {
        var testInput = $(this).val();
        testInput = testInput - 100;
        TweenMax.to(quoteFence, 1, {x:  testInput + "%" });
        });
    });
  };
  
  timberSlider();
  
  
  var rangeSlider = function () {
    var slider = $('.quote-slider__quote-range'),
        range = $('.quote-range__input'),
        value = $('.quote-range__value');
  
    slider.each(function () {
  
  
        range.on('input', function () {
            $(this).next(value).html(this.value);
        });
    });
  };
  
  rangeSlider();

  
  //quote slider fill
  
  $('input[type="range"]').on("change mousemove", function () {

    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', #6BA543), ' + 'color-stop(' + val + ', #000)'+ ')');

  });
  
    $(".quote-dropdown").mouseover(function(){

    $(this).find(".quote-dropdown__item-container").slideDown(300);
    $(this).find(".accent").addClass("animate");
  })
  .mouseleave(function(){

      $(this).find(".quote-dropdown__item-container").slideUp(300);
      $(this).find(".accent").removeClass("animate");
  });
   
   $(".quote-dropdown__item").click(function(e) {

    var text = $(this).html();
    $(".quote-dropdown__item-type").html(text);
    $(".quote-dropdown__item-container").hide();
    e.preventDefault();
   }); 
 
  
  
  
  
   
  /* Map api
   ============================================================================= */
  
   mapsapi().then( function(maps) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
            lat: -37.692499,
            lng: 176.175315
        }
    });
  
    setMarkers(map);
  });
  
  var fences = [
        ['Fatdog Fencing', -37.679322, 176.167573, 30],
        ['Fatdog Fencing', -37.707032, 176.158646, 29],
        ['Fatdog Fencing', -37.715724, 176.177186, 28],
        ['Fatdog Fencing', -37.743963, 176.166886, 27],
        ['Fatdog Fencing', -37.744506, 176.176156, 26],
        ['Fatdog Fencing', -37.680137, 176.122941, 25],
        ['Fatdog Fencing', -37.682039, 176.111268, 24],
        ['Fatdog Fencing', -37.736090, 176.112641, 23],
        ['Fatdog Fencing', -37.737176, 176.105088, 22],
        ['Fatdog Fencing', -37.730931, 176.101998, 21],
        ['Fatdog Fencing', -37.754550, 176.108178, 20],
        ['Fatdog Fencing', -37.833906, 176.057366, 19],
        ['Fatdog Fencing', -37.831736, 176.128777, 18],
        ['Fatdog Fencing', -37.792136, 176.187142, 17],
        ['Fatdog Fencing', -37.632979, 176.046036, 16],
        ['Fatdog Fencing', -37.640592, 176.030243, 15],
        ['Fatdog Fencing', -37.643582, 176.023034, 14],
        ['Fatdog Fencing', -37.645757, 176.036767, 13],
        ['Fatdog Fencing', -37.653912, 176.027840, 12],
        ['Fatdog Fencing', -37.680001, 176.230401, 11],
        ['Fatdog Fencing', -37.673480, 176.227654, 10],
        ['Fatdog Fencing', -37.680001, 176.235894, 9],
        ['Fatdog Fencing', -37.697389, 176.261986, 8],
        ['Fatdog Fencing', -37.707168, 176.303185, 7],
        ['Fatdog Fencing', -37.718032, 176.334771, 6],
        ['Fatdog Fencing', -38.109693, 176.225594, 5],
        ['Fatdog Fencing', -38.138322, 176.226967, 4],
        ['Fatdog Fencing', -38.141022, 176.244820, 3],
        ['Fatdog Fencing', -38.131301, 176.293572, 2],
        ['Fatdog Fencing', -37.773414, 176.499566, 1]
      ];
  
  function setMarkers(map) {
  
    var image = {
        url: '/images/dog-marker.png',
  
        size: new google.maps.Size(60, 43),
  
        origin: new google.maps.Point(0, 0),
  
        anchor: new google.maps.Point(0, 0)
    };
  
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < fences.length; i++) {
        var fence = fences[i];
        var marker = new google.maps.Marker({
            position: {
                lat: fence[1],
                lng: fence[2]
            },
            map: map,
            icon: image,
            shape: shape,
            title: fence[0],
            zIndex: fence[3]
        });
  
  
    }
  }   
  
