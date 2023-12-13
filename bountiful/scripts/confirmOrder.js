let today = new Date();
document.getElementById("date").innerText = "Order Date: " + today.toDateString();

let url = new URL(window.location);
let params  = url.searchParams;

const fruit1 = params.get("fruit1");
const fruit2 = params.get("fruit2");
const fruit3 = params.get("fruit3");

document.getElementById("first").innerText = "Name: " + params.get("fname");
document.getElementById("mail").innerText = "Email: " + params.get("email");
document.getElementById("tele").innerText = "Phone #: " + params.get("phone");
document.getElementById("1fruit").innerText = "Fruit 1: " + fruit1;
document.getElementById("2fruit").innerText = "Fruit 2: " + fruit2;
document.getElementById("3fruit").innerText = "Fruit 3: " + fruit3;
document.getElementById("special").innerText = "Special Request: " + params.get("special");

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); //testing only
            calculate(data);
        } else { 
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function calculate(data) {
    let totalCalories = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCarbs = 0;
    let totalProtein = 0;

    data.forEach((fruit) => {
        if (fruit.name === fruit1 || fruit.name === fruit2 || fruit.name === fruit3) {
            let nutrition = fruit.nutritions;
            totalCalories += nutrition.calories;
            totalFat += nutrition.fat;
            totalSugar += nutrition.sugar;
            totalCarbs += nutrition.carbohydrates;
            totalProtein += nutrition.protein;
        }
    })

    document.getElementById("calories").innerText = "Total Calories: " + totalCalories.toFixed(0);
    document.getElementById("fat").innerText = "Total Fat: " + totalFat.toFixed(0) + "g";
    document.getElementById("sugar").innerText = "Total Sugar: " + totalSugar.toFixed(0) + "g";
    document.getElementById("carbs").innerText = "Total Carbohydrates: " + totalCarbs.toFixed(0) + "g";
    document.getElementById("protein").innerText = "Total Protein: " + totalProtein.toFixed(0) + "g";

}

apiFetch("data/fruityvice.json");