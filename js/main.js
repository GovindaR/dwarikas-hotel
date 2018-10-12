jQuery(document).ready(function(){
	"use strict";
	 //    	$('.header__carousel').owlCarousel({
		//     loop:true,
		//     margin:0,
		//     nav:true,
		//     navText: [ '', ''],
		//     dots: false,
		//     text: false,
		//      autoplay:true,
		// 	    autoplayTimeout:4000,
		// 	    autoplayHoverPause:true,
		//     responsive:{
		//         0:{
		//             items:1
		//         },
		//         600:{
		//             items:1
		//         },
		//         1000:{
		//             items:1
		//         }
		//     }
		// });
	    	$('.video-carousel').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    navText: [ '', ''],
		    dots: false,
		    text: false,
		     autoplay:true,
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});
	  //   $('.friend-slider').owlCarousel({
		 //    loop:true,
		 //    margin:0,
		 //    nav:false,
		 //    navText: [ '', ''],
		 //    dots: true,
			// text: false,
			// autoplay:true,
			// autoplayTimeout:5000,
			// autoplayHoverPause:true,
		 //    responsive:{
		 //        0:{
		 //            items:1
		 //        },
		 //        600:{
		 //            items:1
		 //        },
		 //        1000:{
		 //            items:1
		 //        }
		 //    }
   //      });
   //      $('a').smoothScroll();

			// $('#nav').onePageNav({
			// 	currentClass: 'active1',
			// 	changeHash: false,
			// 	scrollSpeed: 750,
			// 	scrollThreshold: 0.5,
			// 	filter: '',
			// 	easing: 'swing'
			// });

});
jQuery(document).ready(function(){
	"use strict";
	$(window).scroll(function() {
        $(window).scrollTop()>=80?$("nav").addClass("secondary-dark-blue-bg").delay(8000).fadeIn('slow'): $("nav").hasClass("secondary-dark-blue-bg")&&$("nav").removeClass("secondary-dark-blue-bg").delay(8000).fadeIn('slow')
    });
});
// jQuery(document).ready(function(){
// 	"use strict";

//    $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();    
//     if (scroll <= 400) {
//         $(".triangle-cta").addClass("triangle-cta--show");
//     }

// });
//    });
jQuery(document).ready(function(){
	"use strict";
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('.triangle-cta--odd').toggleClass('triangle-cta--show',
     //add 'ok' class when div position match or exceeds else remove the 'ok' class.
      scroll >= $('#full-bg1').offset().top
    );
    $('.triangle-cta1').toggleClass('triangle-cta--show',
     //add 'ok' class when div position match or exceeds else remove the 'ok' class.
      scroll >= $('#full-bg2').offset().top
    );
});
//trigger the scroll
$(window).scroll();
   });