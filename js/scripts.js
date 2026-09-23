document.addEventListener('DOMContentLoaded', () => {

	const menuBtn = document.querySelector('.header__mobile-btn');
	const headerMenu = document.querySelector('.header__nav-wrap');
	const body = document.querySelector('body');

	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active');
		headerMenu.classList.toggle('active');
		// body.classList.toggle('no-scroll');
	})
});