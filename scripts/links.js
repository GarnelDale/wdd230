const baseURL = "https://garneldale.github.io/wdd230/";
const linksURL = "/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data.lessons);
    }
    else {
        console.error("File failed to return.");
    }
}

async function displayLinks(weeks) {
// `<li><a href="lesson03/chamber-site-plan.html">Site Plan</a></li>`
// {
//     "lesson" : "01",
//     "links" : [{"url" : "lesson01/holygrail.html", "title" : "Holy Grail"}]
// },
weeks.forEach((week) => {
    let listItem = document.createElement("li");
    let listItemHTML =`${week.lesson}: ${week.links.forEach((activity)=>{return `<a href= ${activity.url}>${activity.title}</a>`;})} `;
    console.log(listItemHTML);
    listItem.innerHTML = listItemHTML;
    navigation.appendChild(listItem);
});

}

getLinks();