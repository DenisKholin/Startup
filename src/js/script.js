//******СЛАЙДЕР*******/

let positionCatalog = 0;
let slidesToShowCatalog = 1;
let leftCounterCatalog = 0;
let differenceCatalog = 280;

const slidesToScrollCatalog = 1;
const containerCatalog = document.querySelector('.testimonials__slider_container');
const trackCatalog = document.querySelector('.testimonials__slider_track');
const btnPrevCatalog = document.querySelector('.testimonials__btn_prev');
const btnNextCatalog = document.querySelector('.testimonials__btn_next');
const itemsCatalog = document.querySelectorAll('.testimonials__slider_item');
const itemsCountCatalog = itemsCatalog.length;
const itemWidthCatalog = containerCatalog.clientWidth / slidesToShowCatalog;
const movePositionCatalog = slidesToScrollCatalog * itemWidthCatalog;

let counterCatalog = 0;

itemsCatalog.forEach((itemCatalog) => {
	itemCatalog.style.miinWidth = `${itemWidthCatalog}px`;
});

btnNextCatalog.addEventListener('click', () => {
	const itemsLeftCatalog = itemsCountCatalog - (Math.abs(positionCatalog) + slidesToShowCatalog * itemWidthCatalog) / itemWidthCatalog;

	positionCatalog -= itemsLeftCatalog >= slidesToScrollCatalog ? movePositionCatalog : itemsLeftCatalog * itemWidthCatalog;
	counterCatalog += 1;

	if (counterCatalog >= itemsCountCatalog - leftCounterCatalog) {
		positionCatalog = 0;
		counterCatalog = 0;
	}
	console.log(counterCatalog);

	setPositionCatalog();

});

btnPrevCatalog.addEventListener('click', () => {
	const itemsLeftCatalog = Math.abs(positionCatalog) / itemWidthCatalog;

	positionCatalog += itemsLeftCatalog >= slidesToScrollCatalog ? movePositionCatalog : itemsLeftCatalog * itemWidthCatalog;

	counterCatalog -= 1;


	if (counterCatalog < 0) {
		positionCatalog = -(itemsCountCatalog * 280 - differenceCatalog);
		counterCatalog = itemsCountCatalog - (leftCounterCatalog + 1);
	}
	console.log(counterCatalog);

	setPositionCatalog();

});


const setPositionCatalog = () => {
	trackCatalog.style.transform = `translateX(${positionCatalog}px)`;
};


$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top,
				}, 1000);
				return false;
			}
		}
	});
});


function PopUpHide(speed) {
	$(".popup__nav").hide(speed);
}

$(".header__burger").on("click", function () {
	$(".popup__nav").toggle(200);
});



let scrollTrigger = document.getElementById('services').clientHeight;

window.onscroll = function () { myFunction() };

function myFunction() {
	if (document.body.scrollTop > scrollTrigger || document.documentElement.scrollTop > scrollTrigger) {
		document.getElementById("sticky").style.display = "flex";
	} else if (document.body.scrollTop < scrollTrigger || document.documentElement.scrollTop < scrollTrigger) {
		document.getElementById("sticky").style.display = "none";
	}
}


