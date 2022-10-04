class Weather {
  constructor(city) {
    this.api_Key = '49f77f8093554255aee181049222709';
    this.city = city;
  }


  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?q=${this.city}`, {
      headers: {
        'Authorization': `bearer ${this.api_Key}`
      }
    })
    const result = await response.json()
    return result

  }


  // Change Weather Location
  changeLocation(city) {
    this.city = city
  }
}