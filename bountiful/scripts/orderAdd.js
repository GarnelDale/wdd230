const localValue = "drinks-ordered";
const order = document.getElementById("formButton");

order.addEventListener("click", () => {
  let localCount = localStorage.getItem(localValue);
  if (localCount) {
    localStorage.setItem(localValue, (parseInt(localCount) + 1));
  } else {
    localStorage.setItem(localValue, 1);
  }
});
