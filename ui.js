class UI{
  constructor(){
    this.location = document.getElementById('location')
    this.description = document.getElementById('description')
    this.string = document.getElementById('string')
    this.icon = document.getElementById('icon')
    this.humidity = document.getElementById('humidity')
    this.dewpoint = document.getElementById('dewpoint')
    this.feelslike = document.getElementById('feelslike')
    this.wind = document.getElementById('wind')
  }


  paint(weather){
   this.location.textContent= weather.location.region;
   this.description.textContent = weather.current.condition.text;
   this.string.textContent = weather.current.temp_f;
   this.icon.setAttribute('src', weather.current.condition.icon);
   this.feelslike.textContent = weather.current.feelslike;
   this.humidity.textContent = `Relative Humidity:${weather.current.humidity}`;
  //  this.dewpoint.textContent=`Dew Point:${weather.display.}`
  this.wind.textContent =`Wind:${weather.current.wind_degree}`
  }

  
}
