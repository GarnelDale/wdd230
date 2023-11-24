const modeButton = document.querySelector("input");
const cards = document.querySelectorAll(".card");
const nav = document.querySelector("nav");
const button = document.querySelectorAll("button");
const members = document.querySelectorAll("section a");            

modeButton.addEventListener("click", ()=> {
	if (modeButton.checked) {
		document.documentElement.style.setProperty('--main-background-color', 'black');        
		document.documentElement.style.setProperty('--main-text-color', '#feeed4');   
		document.documentElement.style.setProperty('--body-link-color', '#feeed4');  
		cards.forEach((card)=> {
			card.style.border = "1px solid var(--main-text-color)";
		})
		button.forEach((buttons)=> {
			buttons.style.background = "#feeed4";
		})
		if (screen.width >= 640) 
			nav.style.border = "1px solid var(--main-text-color)";
	} else {
		document.documentElement.style.setProperty('--main-background-color', '#feeed4');        
		document.documentElement.style.setProperty('--main-text-color', 'black');   
		document.documentElement.style.setProperty('--body-link-color', '#7b2210');        
		cards.forEach((card)=> {
			card.style.border = "1px solid var(--main-text-color)";
		})
		button.forEach((buttons)=> {
			buttons.style.background = "white";
		})
		if (screen.width >= 640) 
			nav.style.border = "1px solid var(--main-text-color)";
	}
});
