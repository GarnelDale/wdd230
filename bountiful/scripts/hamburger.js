const hamButton = document.querySelector('#burger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});