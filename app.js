const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

$(document).ready(function () {
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});
});

$('.owl-carousel').owlCarousel({
	loop: true,
	center: true,
	dots: true,
	margin: 10,
	video: true,
	nav: true,
	lazyLoad: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	smartSpeed: 450,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsive: {
		0: {
			items: 1
		},
		480: {
			items: 1
		},
		560: {
			items: 2
		},
		760: {
			items: 2
		},
		990: {
			items: 3
		},
		1200: {
			items: 3
		},
		1500: {
			items: 4
		}
	}
});

// Init AOS
function aos_init() {
	AOS.init({
		duration: 1000,
		once: true
	});
}
$(window).on('load', function () {
	aos_init();
});

// scroll top 
$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('.scrolltop:hidden').stop(true, true).fadeIn();
	} else {
		$('.scrolltop').stop(true, true).fadeOut();
	}
});
$(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000"); return false }) })