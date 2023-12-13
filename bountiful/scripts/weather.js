const lat = 33.16;  
const lon = -117.34;
const APIKey = '2d126ece34c6f363a92656ab0ec6ea42';
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const humidity = document.querySelector('#humidity');
const dayInMs = 60 * 60 * 24 * 1000;

async function apiFetch(type,url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); //testing only
            if (type)
                displayResults(data);
            else
                getForecast(data.list);
        } else { 
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function getForecast(data) {
    let days = [];
    let today = new Date();

    for (let i=0; i < 3; i++) {
        today = new Date(today.getTime() + dayInMs);
        let tomorrow = today.toISOString().slice(0, 10);
        days.push(tomorrow);
    }
        
    // Find the object with the highest temperature for each day
    highTemps = days.map((day) => data
        .filter(x => x.dt_txt.startsWith(day))
    ) 

    // Add the forecast information to the HTML document
    let weather = document.querySelector("#weather")
    for (let i=0; i < 3; i++){
        let forecast = document.createElement("section");
        forecast.innerHTML = `<h2>${days[i]}</h2><p>Forecast at 9AM: ${highTemps[i][3].weather[0].description}</p><img src=https://openweathermap.org/img/w/${highTemps[i][3].weather[0].icon}.png>`
        weather.append(forecast)
    }

}

async function displayResults(data) {
    currentTemp.innerHTML = `Temperature: ${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    humidity.innerHTML = `Relative Humidity: ${data.main.humidity}%`;
}

apiFetch(true, currentURL);
apiFetch(false, forecastURL);