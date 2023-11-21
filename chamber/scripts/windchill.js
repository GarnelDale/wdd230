//15.47, 32.57 placeholder coordinates for the capital of 
//Sudan for similar weather to Ald-ruhn

const windchill = document.querySelector("#windchill");

function calcWindchill(temp, wind) {
    if (temp > 50 || wind < 3)
        windchill.innerHTML = "N/A";
    else {
        let temperature = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
        windchill.innerHTML = `${temperature.toFixed(1)}&deg;F`;
    }
}

calcWindchill(72, 5);