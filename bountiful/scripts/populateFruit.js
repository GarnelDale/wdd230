const fruityAPI = "data/fruityvice.json";
const selects = document.querySelectorAll(".fruitSelect");

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); //testing only
            populate(data);
        } else { 
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function populate(data) {
    selects.forEach((select) => {
        let blank = document.createElement("option");
        blank.value = "";
        blank.innerText = "Please select a fruit";
        select.append(blank);
    data.forEach((fruit) => {
        let option = document.createElement("option");
        option.value = fruit.name;
        option.innerText = fruit.name;
        select.append(option);
    })
})
}

apiFetch(fruityAPI);