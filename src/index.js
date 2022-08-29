import './styles/styles.css';
import {getData} from './citiesWeather';
import {convert} from './conversion';
import {genGifs} from './giphyGifs';

const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind-speed');
const desc = document.getElementById('desc');
const icon = document.getElementById('icon');

const search = document.getElementById('searchButton');
const input = document.getElementById('search');
const gif = document.getElementById('gif');
const check = document.getElementById('check');
const sign = document.getElementById('unit');


const inputS = document.getElementById('search');


function update(name) {
    check.checked = false;

    if (check.checked == true) {
        sign.textContent = '°F';
    }
    else
    {
        sign.textContent = '°C';
    }

    getData(name)
    .then(val => {
        cityName.textContent = val.cityW;
        temperature.textContent = val.temp;
        humidity.textContent = val.humidity;
        wind.textContent = val.windSpeed;
        desc.textContent = val.desc;
        icon.src = `https://openweathermap.org/img/wn/${val.icon}@2x.png`;
    })
    
    genGifs(`ghibli+totoro+${desc.textContent}`).then(val => {
            gif.src = val;
    });
}
search.addEventListener('click', () => {
    // update(`${input.textContent}`);
    console.log(input.value);
    update(input.value);
})

inputS.addEventListener('search', () => {
    console.log(input.value);
    update(input.value);
});

check.addEventListener('change', () => {
    convert();
})

update();