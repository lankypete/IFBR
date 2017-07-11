import $ from 'jquery';

class MobileMenu {

	constructor() {
		this.menuIcon = $('.site-header__menu-icon');
		this.menu = $('.nav-menu');
		this.events();
	}

	events() {
		this.menuIcon.on('click', this.hideShow.bind(this));
	}

	hideShow() {
		this.menu.toggleClass('nav-menu--show');
		this.menuIcon.toggleClass('site-header__menu-icon--x');
	}

}

export default MobileMenu;