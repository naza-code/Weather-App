// Init Storage
const storage = new Storage();

// Get stored location data
const weatherLocation= storage.getLocationData();
// Init Weather object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI();
// Get Weather on DOM LOAD
document.addEventListener('DOMContentLoaded', getWeather);
// Change Location Event
document.getElementById('changesbtn').addEventListener('click', changeWeather)

function changeWeather(e){
  e.preventDefault()
  console.log('test')
  const city= document.getElementById('city').value;
  const state= document.getElementById('state').value;
  weather.changeLocation(city);
  //  Set Location in Local Storage
  storage.setLocationData(city)
  // Get and Display Weather
  getWeather();
}

function getWeather(){
weather.getWeather()
.then(results => {ui.paint(results)})
.catch(err=>console.log(err))}


const button= document.getElementById('btn');
const button2= document.getElementById('closebtn');
const form= document.querySelector('.formcard');

button.addEventListener('click', showWeather)
button2.addEventListener('click', fetchData)

function showWeather(e){
  form.style.display='block';

  console.log('change location');
}

function fetchData(e) {
  e.preventDefault()
  console.log('data fetched')
  form.style.display='none';
}