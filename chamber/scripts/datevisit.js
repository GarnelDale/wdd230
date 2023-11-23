const localValue = 'last-visit';
const dayInMs = 60 * 60 * 24 * 1000;
const messageBox = document.querySelector("#visit");

function visitDiscoverMessage() {
    let today = new Date();
    let lastVisitValue = localStorage.getItem(localValue);
    if (lastVisitValue != null) {
        let lastVisit = parseInt(lastVisitValue);
        let daysSinceVisit = Math.floor((today.getTime() - lastVisit) / dayInMs)
        if (daysSinceVisit === 0)
        {
            messageBox.textContent = "Back so soon! Awesome!";
        }   else {
            if (daysSinceVisit === 1) {
                messageBox.textContent = "You last visited 1 day ago.";
            } else {
                messageBox.textContent = `You last visited ${daysSinceVisit} days ago.`;
            }
        }
    } else
        messageBox.textContent = "Welcome! Let us know if you have any questions.";

    localStorage.setItem(localValue, `${today.getTime()}`);
}

visitDiscoverMessage();