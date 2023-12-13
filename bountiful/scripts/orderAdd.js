const localValue = "drinks-ordered";

addEventListener("submit", () => {
  let localCount = localStorage.getItem(localValue);
  if (localCount) {
    localStorage.setItem(localValue, (parseInt(localCount) + 1));
  } else {
    localStorage.setItem(localValue, 1);
  }
});
