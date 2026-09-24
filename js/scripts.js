document.addEventListener('DOMContentLoaded', () => {

	const menuBtn = document.querySelector('.header__mobile-btn');
	const headerMenu = document.querySelector('.header__nav-wrap');
	const body = document.querySelector('body');

	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active');
		headerMenu.classList.toggle('active');
		// body.classList.toggle('no-scroll');
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
});