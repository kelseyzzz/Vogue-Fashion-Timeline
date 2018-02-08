"use strict";

(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();


///////////////////////////// preloader
//// 

$(window).on('load', function(){
	$('#preloader').fadeOut('slow',function(){
		$(this).remove();
	});
});
// $(window).on('load', function(){
// 	$('#preloader').delay(1000).fadeOut('slow',function(){
// 		$(this).remove();
// 	});
// });

$('.logo-square').on("click", function() {
	$(".decades-pagination ul").slideToggle("open").css('display','flex');

});



$(".main").onepage_scroll({
	keyboard:true,
	pagination: false, 
	updateURL: false

});



$(".nav-home").click(function() {
	$(".main").moveTo(1);
	$('.decades-pagination ul li a').removeClass("active");
	$(this).addClass("active");
});

$(".nav-sixties").click(function() {
	$(".main").moveTo(2);
});

$(".nav-seventies").click(function() {
	$(".main").moveTo(3);
});

$(".nav-eighties").click(function() {
	$(".main").moveTo(4);
});

$(".nav-nineties").click(function() {
	$(".main").moveTo(5);
});

$(".nav-2000s").click(function() {
	$(".main").moveTo(6);
});

$(".nav-2010s").click(function() {
	$(".main").moveTo(7);
});



// $('li a').click(function(e) {
// 	e.preventDefault();
// 	$('a').removeClass('active');
// 	$(this).addClass('active');
// });

$(".begin-btn,.downward-arrow i, .down-arrow i").click(function() {
	$(".main").moveDown();
		console.log('im clicked');
});

$(".up-arrow i").click(function() {
	$(".main").moveUp();
		console.log('im clicked');
});



////// logo animation

// $(".main").onepage_scroll({
//     afterMove: function(index) {
//      var tween = TweenMax.to(".timeline-logo", 0.5, {x:200, y:200, scale: 0.5});
//     }
//   });





TweenLite.to(".logo-square", 3, {autoAlpha:1, delay:2});
// TweenLite.to(".social-media", 3, {autoAlpha:1, delay:2});




var scene = $('#scene').get(0);
var parallaxInstance = new Parallax(scene,sceneRight, {
	pointerEvents: true
});

var sceneRight = $('#sceneRight').get(0);
var parallaxInstance = new Parallax(sceneRight, {
	pointerEvents: true
});


/////////////////// leaf enterance 

var blackLeafLeft = $('.black-leaf-left');
TweenMax.to(blackLeafLeft, 2, {
	marginLeft:'-30vw',
	ease: Power3.easeOut
});

var whiteLeafLeft = $('.white-leaf-top-left');
TweenMax.to(whiteLeafLeft, 2, {
	marginTop:'-50vh',
	ease: Power3.easeOut
});

var paintSpecs = $('.paint-specs');
TweenMax.to(paintSpecs, 2, {
	marginLeft:'2vw',
	ease: Power3.easeOut
});

var whiteLeafRight = $('.white-right-leaf');
TweenMax.to(whiteLeafRight, 2, {
	marginLeft:'11vh',
	ease: Power3.easeOut
});


var blackLeafRightBottom = $('.black-bottom-leaf');
TweenMax.to(blackLeafRightBottom, 2, {
	marginTop:'70vh',
	ease: Power3.easeOut
});



var blackLeafRight= $('.black-bottom-leaf2');
TweenMax.to(blackLeafRight, 2, {
	marginLeft:'38vw',
	ease: Power3.easeOut
});


///////////////////  end of leaf enterance 


/////////////////////////////////////////////////////////// the image carousel 




// $(function(){
// 	var image_height = 0;
// 	var gallery_offset = 0;
// 	var image_count = $('img.thumbnail').length;
// 	var click_count = 0;
// 	var image_height = 0;
// 	var last_images_count = 0;


// 	jQuery('.thumbnail').each(function() {
// 		$this.on(load),function(){ image_height = $(this).parent().outerHeight(); });
// 		image_height = $(this).parent().outerHeight();
// 	})





///////////////////////////////////////// end of image carousel code ////////////////////

$(function(){
	var image_height = 0;
	var gallery_offset = 0;
	var image_count = $('img.thumbnail').length;
	var click_count = 0;
	var image_height = 0;
	var last_images_count = 0;

	$('.gallery-container a').scroll(function(){
	  $('.gallery-container a').removeClass('active')
		$(this).addClass('active');

	});

	jQuery('.thumbnail').each(function(){
	  $(this).on('load', function(){ image_height = $(this).parent().outerHeight(); });
	  image_height = $(this).parent().outerHeight();
	})

	// Disable arrows if the images count is 3 below
	if(image_count <= 3) {
		$('.product-more-pictures .up, .product-more-pictures .down').addClass('disabled')
		click_count = 0;
	}

	// Set the first image as active
	jQuery('.gallery-container img.thumbnail').first().click();
	var thumb_active = jQuery('.gallery-container .active');

	$('.gallery-container a').on('click', function() {
		thumb_active = jQuery('.gallery-container .active');
	});

	$('.product-more-pictures .down').on('scroll', function (e) {
		$('.product-more-pictures .up').removeClass('disabled')
		if(thumb_active.nextAll(':lt(1)').length) {
		  thumb_active.nextAll(':lt(1)').children().click()
		  thumb_active = jQuery('.gallery-container .active');

		} 

		if( ! thumb_active.next().length) {
		  $(this).addClass('disabled')
		} else {
		  $(this).removeClass('disabled');
		}

		if (click_count < image_count) {
			click_count = click_count + 1;

			update_gallery('down');
		}



	});

	$('.product-more-pictures .up').on('click', function () {
		$('.product-more-pictures .down').removeClass('disabled')
		if(thumb_active.prevAll(':lt(1)').length) {
		  thumb_active.prevAll(':lt(1)').children().click()
		  thumb_active = jQuery('.gallery-container .active');
		}

		if( ! thumb_active.prev().length) {
		  $(this).addClass('disabled')
		} else {
		  $(this).removeClass('disabled');
		}

		if (click_count > 0) {
			click_count = click_count - 1;

			update_gallery('up');

		}
	});

	function update_gallery(direction) {         
		gallery_offset = click_count * image_height;
		last_images_count = thumb_active.nextAll().length;

		$(".gallery-container").animate({
		  'top': '-' + gallery_offset + 'px'
		}, 800);

	}

});







