import $ from "jquery";

class FadingBanner {

	constructor() {
		this.numOfChildren = $('.banner__fader > div').length;
		this.fadeChildElements();
	}

	fadeChildElements() {
		var currentDiv = 0,
		totalDivs = this.numOfChildren;
		
		function fn() {
			$('.banner__fader > :nth-child('+currentDiv+')').removeClass('banner__info--visible');
			currentDiv++;
			if(currentDiv > totalDivs) currentDiv = 1;
			$('.banner__fader > :nth-child('+currentDiv+')').addClass('banner__info--visible');
		}
		fn();
		setInterval(fn, 3700);
		
	}

}

export default FadingBanner;