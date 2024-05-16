const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const heroHeight = hero.offsetHeight;
let lastOffset = 0;

window.addEventListener('scroll', (e) => {
	scrollOffset = window.pageYOffset;

	if (scrollOffset > lastOffset) {
		header.classList.remove('fixed');
	} else {
		header.classList.add('fixed');
	}

	if (scrollOffset < heroHeight) {
		header.classList.remove('fixed');
	}

	lastOffset = scrollOffset;
});
