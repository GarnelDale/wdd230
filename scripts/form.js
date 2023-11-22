const p1 = document.querySelector("#password");
const p2 = document.querySelector("#confirmation");
const match = document.querySelector("#passwordMatch");


p2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (p1.value !== p2.value) {
		match.textContent = "Passwords must match.";
		match.style.display = "block";
		p2.style.backgroundColor = "#fff0f3";
        p1.value = "";
		p2.value = "";
		p1.focus();
	} else {
		match.style.display = "none";
		p2.style.backgroundColor = "#fff";
		p2.style.color = "#000";
	}
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
