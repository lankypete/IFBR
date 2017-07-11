import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.headerDiv = $('.site-header');
		this.getStickyHere = $('.banner__fader');
		this.pageSection = $('.page-section');
		this.headerLinks = $('.nav-menu a');
		this.lazyloadElements = $('.lazyload');
		this.makeSticky();
		this.colourLinks();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyloadElements.on('load', function(){
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	makeSticky() {
		var that = this;
		new Waypoint({
			element: that.getStickyHere[0],
			handler: function(direction) {
				if(direction == 'down') {
					that.headerDiv.addClass('site-header--sticky');
				} else {
					that.headerDiv.removeClass('site-header--sticky');
				}
			},
			offset: '30%'
		});
	}

	colourLinks() {
		var that = this;
		this.pageSection.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction){ 
					if(direction == 'down'){console.log('here');
						that.headerLinks.removeClass('nav-menu__link--current');
						var matchingNavLink = currentPageSection.getAttribute('data-matching-link');
						$(matchingNavLink).addClass('nav-menu__link--current');
					}
				},
				offset: '18%'
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if(direction == 'up'){
						that.headerLinks.removeClass('nav-menu__link--current');
						var matchingNavLink = currentPageSection.getAttribute('data-matching-link');
						$(matchingNavLink).addClass('nav-menu__link--current');
					}
				},
				offset: '-40%'
			});
		});
	}

}

export default StickyHeader;