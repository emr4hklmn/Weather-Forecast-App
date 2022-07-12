const url="https://api.openweathermap.org/data/2.5/";
const city=document.querySelector(".city");
const temperature=document.querySelector(".temp");
const minmax=document.querySelector(".minmax");
const key="c54e72f2a87eb58bcf20adaf1232147a";
const desc=document.querySelector(".desc");
const humid=document.querySelector(".humidity");
const weather_icon=document.querySelector(".icon")
const iconURL="http://openweathermap.org/img/wn/"

const setQuery=(e)=>{
    if(e.keyCode=='13'){
    getResult(searchBar.value)
}}
const getResult=(cityName)=>{
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query)
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResults);
}
const displayResults=(weather)=>{
console.log(weather);
const TempOutput=Math.round(weather.main.temp) + " °C"
const cityOutput=weather.name +" , "+weather.sys.country
const minmaxTemp=Math.round(weather.main.temp_min)+ " °C" + " / "+Math.round(weather.main.temp_max)+ " °C"
const humidityOutput=`Nem : ${weather.main.humidity } % `
city.innerText=cityOutput;
temperature.innerText=TempOutput
minmax.innerText=minmaxTemp
humid.innerText=humidityOutput
const descOutput=weather.weather[0].description
const iconID=weather.weather[0].icon
const iconLink=`${iconURL}${iconID}@2x.png`
desc.innerText=descOutput
setIcon(iconLink,weather_icon);
}
function setIcon(iconLink , weather_icon) {
    weather_icon.style.backgroundImage=`url(${iconLink})`
  
}


const searchBar=document.querySelector(".searchBar")
searchBar.addEventListener('keypress', setQuery)
