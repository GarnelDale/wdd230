const bannerClose = document.querySelector('.banner button');
const banner = document.querySelector('.banner');
const hero = document.querySelector('.hero');
const day = new Date();
const weekDay = day.getDay();

//This banner should only appear on Mondays, Tuesdays, and Wednesdays.
function checkDay() {
	if (weekDay >= 4 || weekDay == 0)
		banner.style.display = "none";
		hero.style.gridRow = "1/3";
}

bannerClose.addEventListener('click', () => {
	banner.style.display = "none";
	hero.style.gridRow = "1/3";
});

checkDay();