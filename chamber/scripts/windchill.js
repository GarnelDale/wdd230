//15.47, 32.57 placeholder coordinates for the capital of 
//Sudan for similar weather to Ald-ruhn
const lat = 15.47;
const lon = 32.57;
const APIKey = '2d126ece34c6f363a92656ab0ec6ea42';
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const windSpeed = document.querySelector('#windspeed');
const windchill = document.querySelector("#windchill");
const dayInMs = 60 * 60 * 24 * 1000;

async function apiFetch(type,url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
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
        .reduce((current, high) => current.main.temp > high.main.temp ? current : high)
    ) 

    // Find the object with the lowest temperature for each day
    lowTemps = days.map((day) => data
        .filter(x => x.dt_txt.startsWith(day))
        .reduce((current, low) => current.main.temp < low.main.temp ? current : low)        
    )    
    
    // Add the forecast information to the HTML document
    let weather = document.querySelector("#weather")
    for (let i=0; i < 3; i++){
        let forecast = document.createElement("section");
        forecast.innerHTML = `<h2>${days[i]}</h2><p>High: ${highTemps[i].main.temp.toFixed(0)}&deg;</p><p>Low: ${lowTemps[i].main.temp.toFixed(0)}&deg;</p>`
        weather.append(newsection)
    }

}

async function displayResults(data) {
    currentTemp.innerHTML = `Temperature: ${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} mph`
    calcWindchill(data.main.temp, data.wind.speed);
}

function calcWindchill(temp, wind) {
    if (temp > 50 || wind < 3)
        windchill.innerHTML = "Windchill: N/A";
    else {
        let temperature = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
        windchill.innerHTML = `Windchill: ${temperature.toFixed(0)}&deg;F`;
    }
}

apiFetch(true, currentURL);
apiFetch(false, forecastURL);