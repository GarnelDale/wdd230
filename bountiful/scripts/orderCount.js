const localValue = "drinks-ordered";
const quantity = document.querySelector("#drinks");
const thankYou = document.getElementById("thanks");

let localCount = localStorage.getItem(localValue);
if (localCount) {
  quantity.innerText = localCount;
  thankYou.innerText = "Thank you for your patronage!";
} else {
  quantity.innerText = 0;
  thankYou.innerText = "We hope to serve you soon!";
}