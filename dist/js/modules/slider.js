const slider = (slides, prev, next) => {
	let slideIndex = 1;
	const items = document.querySelectorAll(slides);

	function showSlides(n) {
		if (n > items.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = items.length;
		}

		items.forEach(item => {
			item.classList.add("animated");
			item.style.display = "none";
		});

		if(items[slideIndex - 1]) {
			items[slideIndex - 1].style.display = 'flex';
		}
	}

	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	try {
		const prevBtn = document.querySelector(prev),
			nextBtn = document.querySelector(next);

		prevBtn.addEventListener('click', () => {
			plusSlides(-1);
					//плавная анимация слайдов
			/*items[slideIndex - 1].classList.remove('slideInLeft');
			items[slideIndex - 1].classList.add('slideInRight');*/
		});

		nextBtn.addEventListener('click', () => {
			plusSlides(1);
					//плавная анимация слайдов
			/*items[slideIndex - 1].classList.remove('slideInRight');
			items[slideIndex - 1].classList.add('slideInLeft');*/
		});
	} catch(e) {}

	let slide = new Splide( '.splide', {
		perPage  : 3,
		focus    : 'center',
		trimSpace: false,
	  } );
	  slide();

	};

export default slider;