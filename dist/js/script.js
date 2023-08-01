import scrolling from './modules/pageup.js';
import slider from './modules/slider.js';

window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	slider('.splide', '.prev22', '.next22')
});

