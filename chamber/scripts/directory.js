const directory = "data/members.json";
const main = document.querySelector("#directory");
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

async function getDirectory() {
    const response = await fetch(directory);
    if (response.ok) {
        const data = await response.json();
        displayMembers(data);
    }
    else {
        console.error("File failed to return.");
    }
}

// name address phone website image membership

function displayMembers(data) {
    data.forEach((member)=>{
        let section = document.createElement("section");
        section.classList.add("card");
        let sectionHTML =`<h2>${member.name}</h2>
        <p>Address: ${member.address}</p>
        <p>Phone #: ${member.phone}</p>
        <a href="${member.website}">Website</a>
        <img src="${member.image}" alt="Picture of ${member.name}" loading="lazy" width="200" height="150">
        <p>Membership: ${member.membership}</p>`
        section.innerHTML = sectionHTML;
        main.appendChild(section);
    })
}

getDirectory();


grid.addEventListener('click', ()=> {
    main.classList.remove("list");
})

list.addEventListener('click', ()=> {
    main.classList.add("list");
})
