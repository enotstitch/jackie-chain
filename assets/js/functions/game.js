const iframe =
	'<iframe class="game-screen__content" src="game/index.html" width="100%" height="660"></iframe>';
const gameScreen = document.querySelector('.game-screen');
const btn = gameScreen.querySelector('.game-screen__button');

btn.addEventListener('click', () => {
	gameScreen.innerHTML = iframe;
	const content = gameScreen.querySelector('.game-screen__content');
	content.focus();
});
