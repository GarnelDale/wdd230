const modeButton = document.querySelector("input");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".navigation li a");
const buttons = document.querySelectorAll("main button");

modeButton.addEventListener("click", () => {
	if (modeButton.checked) {
		body.style.background = "#000";
		body.style.color = "#feeed4";
		cards.forEach((card)=>{
			card.style.border = "1px solid white";
		})
		navLinks.forEach((link)=>{
			link.style.color = "#feeed4";
		})
		buttons.forEach((button)=>{
			button.style.background = "#feeed4";
		})
		if (screen.width >= 640) {
			nav.style.border = "1px solid white";
		}
	} else {
		body.style.background = "#feeed4";
		body.style.color = "black";
		cards.forEach((card)=>{
			card.style.border = "1px solid black";
		})
		navLinks.forEach((link)=>{
			link.style.color = "black";
		})
		buttons.forEach((button)=>{
			button.style.background = "white";
		})
		if (screen.width >= 640) {
			nav.style.border = "1px solid black";
		}
	}
});
