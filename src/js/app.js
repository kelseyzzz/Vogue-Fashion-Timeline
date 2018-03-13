"use strict";

(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");

})();

///////////////////////////// preloader
//// 

$(window).on('load', function(){
	$('#preloader').fadeOut('4000',function(){
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





TweenLite.to(".logo-square", 2, {autoAlpha:1, delay:1});
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

// $(".last-thumb").hover(function() {

// 	$( '.no-chang-img' ).attr("src","../dist/img/next_right.png");
// 	}, function() {
// });






	$('.sixties-carousel a img').hover(

		function(){

			console.log('neverworksonfirsttry');
		
			var linkIndex = $(this).attr("data-filename");
			$(this).addClass('hover');
			$('.change-sixties-img').attr('src','../dist/img/'+linkIndex+'.png');
		},
		function(){
			$(this).removeClass('hover');
			$('.change-sixties-img').attr('src','../dist/img/intro.png');
		}
	);
	


$('.seventies-carousel a img').hover(

	function(){

		console.log('neverworksonfirsttry');
	
		var linkIndex = $(this).attr("data-filename");
		$(this).addClass('hover');
		$('.change-seventies-img').attr('src','../dist/img/'+linkIndex+'.png');
	},
	function(){
		$(this).removeClass('hover');
		$('.change-seventies-img').attr('src','../dist/img/70s_intro.png');
	}
);


$('.80s-carousel a img').hover(

	function(){

		console.log('neverworksonfirsttry');
	
		var linkIndex = $(this).attr("data-filename");
		$(this).addClass('hover');
		$('.change-80s-img').attr('src','../dist/img/'+linkIndex+'.png');
	},
	function(){
		$(this).removeClass('hover');
		$('.change-80s-img').attr('src','../dist/img/80s-intro.png');
	}
);

$('.90s-carousel a img').hover(

	function(){

		console.log('neverworksonfirsttry');
	
		var linkIndex = $(this).attr("data-filename");
		$(this).addClass('hover');
		$('.change-90s-img').attr('src','../dist/img/'+linkIndex+'.png');
	},
	function(){
		$(this).removeClass('hover');
		$('.change-90s-img').attr('src','../dist/img/90s-intro.png');
	}
);

$('.00s-carousel a img').hover(

	function(){

		console.log('neverworksonfirsttry');
	
		var linkIndex = $(this).attr("data-filename");
		$(this).addClass('hover');
		$('.change-00s-img').attr('src','../dist/img/'+linkIndex+'.png');
	},
	function(){
		$(this).removeClass('hover');
		$('.change-00s-img').attr('src','../dist/img/00s-intro.png');
	}
);

$('.10s-carousel a img').hover(

	function(){

		console.log('neverworksonfirsttry');
	
		var linkIndex = $(this).attr("data-filename");
		$(this).addClass('hover');
		$('.change-10s-img').attr('src','../dist/img/'+linkIndex+'.png');
	},
	function(){
		$(this).removeClass('hover');
		$('.change-10s-img').attr('src','../dist/img/10s-intro.png');
	}
);







///////////////////////////////////////// end of image carousel code ////////////////////








