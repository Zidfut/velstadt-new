document.addEventListener('DOMContentLoaded', () => {

	const menuBtn = document.querySelector('.header__mobile-btn');
	const headerMenu = document.querySelector('.header__nav-wrap');
	const body = document.querySelector('body');

	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active');
		headerMenu.classList.toggle('active');
		body.classList.toggle('no-scroll');
	})
	
	const dropdownMedia = window.matchMedia('(max-width: 1200px)');

	document.querySelectorAll('.dropdown__btn').forEach((button) => {
		button.addEventListener('click', function (event) {
			if (!dropdownMedia.matches) {
				return;
			}

			event.preventDefault();
			event.stopPropagation();

			const currentDropdown = this.closest('.dropdown');

			document.querySelectorAll('.dropdown.active').forEach((dropdown) => {
				if (dropdown !== currentDropdown) {
					dropdown.classList.remove('active');
					dropdown.querySelector('.dropdown__btn').classList.remove('active');
				}
			});

			currentDropdown.classList.toggle('active');
			this.classList.toggle('active');
		});
	});

	const partnersSwiper = new Swiper(".partners__swiper", {
		slidesPerView: "auto",
		spaceBetween: 48,
		loop: true,
		speed: 6000,
		allowTouchMove: false,
		autoplay: {
			delay: 1,
			disableOnInteraction: false
		},
		breakpoints: {
			320: {
				spaceBetween: 32,
			},
			768: {
				spaceBetween: 48,
			},
			1200: {
				spaceBetween: 60,
			},
		}
	});

	const resourcesSwiper = new Swiper(".resources__swiper", {
		slidesPerView: 'auto',
		spaceBetween: 0,
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 'auto',
			},
			1024: {
				slidesPerView: 3,
			},
		}
	});

	const customerSwiper = new Swiper(".customer__swiper", {
		slidesPerView: 'auto',
		spaceBetween: 16,
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 'auto',
				spaceBetween: 16,
			},
			1024: {
				slidesPerView: 3,
			},
			1200: {
				spaceBetween: 24,
			},
		}
	});
});