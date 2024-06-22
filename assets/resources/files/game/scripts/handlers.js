document.addEventListener('keydown', (event) => {
	if (event.code == 'ArrowUp' || event.code == 'ArrowDown') {
		event.preventDefault();
	}
});