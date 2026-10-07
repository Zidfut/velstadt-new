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

	document.querySelectorAll('.services__accardion-header').forEach(header => {
		header.addEventListener('click', () => {
			const currentItem = header.closest('.services__accardion-item');

			document.querySelectorAll('.services__accardion-item').forEach(item => {
				item.classList.remove('active');
			});

			currentItem.classList.add('active');
		});
	});

	const phantomTabs = document.querySelector('.phantom__tabs');
	const phantomTabList = phantomTabs?.querySelector('ul');
	const phantomTabLinks = phantomTabs?.querySelectorAll('a');
	const phantomIndicator = phantomTabs?.querySelector('.phantom__tabs-indicator');

	const phantomItems = document.querySelectorAll('.phantom__item');

	if (phantomTabs && phantomTabList && phantomTabLinks && phantomIndicator) {

		const updateIndicator = (tab, animate = true) => {
			const tabRect = tab.getBoundingClientRect();
			const listRect = phantomTabList.getBoundingClientRect();

			if (!animate) {
				phantomIndicator.style.transition = 'none';
			}

			phantomIndicator.style.width = `${tabRect.width}px`;
			phantomIndicator.style.transform = `translateX(${tabRect.left - listRect.left}px)`;

			if (!animate) {
				requestAnimationFrame(() => {
					phantomIndicator.style.transition = '';
				});
			}
		};

		const activateTab = (tab, animate = true) => {
			const target = tab.dataset.tab;

			// Tabs
			phantomTabLinks.forEach(item => {
				item.classList.toggle(
					'active',
					item === tab
				);
			});

			// Content
			phantomItems.forEach(item => {
				item.classList.toggle(
					'active',
					item.dataset.tabContent === target
				);
			});

			// Indicator
			updateIndicator(tab, animate);
		};

		const activeTab = phantomTabs.querySelector('a.active');

		if (activeTab) {
			activateTab(activeTab, false);
		}

		phantomTabLinks.forEach(tab => {
			tab.addEventListener('click', event => {
				event.preventDefault();

				activateTab(tab);

				tab.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
					inline: 'center'
				});
			});
		});

		window.addEventListener('resize', () => {
			const activeTab = phantomTabs.querySelector('a.active');

			if (activeTab) {
				updateIndicator(activeTab, false);
			}
		});
	}

});