class DavidLazyLoad {
	constructor() {
		this.fadeInImages();
	}

	fadeInImages() {
		[].forEach.call(document.querySelectorAll('img.d-lazy[data-src]'),    function(img) {
		  img.setAttribute('srcset', img.getAttribute('data-src'));
		  img.onload = function() {
		    img.removeAttribute('data-src');
		  };
		});
	}
}

export default DavidLazyLoad;