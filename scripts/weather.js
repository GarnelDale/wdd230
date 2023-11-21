const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const APIKey = '2d126ece34c6f363a92656ab0ec6ea42';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=43.97&lon=-111.67&units=imperial&appid=${APIKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); //testing only
            displayResults(data)
        } else { 
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();