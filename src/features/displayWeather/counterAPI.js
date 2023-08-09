// A mock function to mimic making an async request for data
import axios from "../../api/axios"


export function fetchWeather(city) {
  return new Promise(async(resolve) =>{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=8c29013d28ecd24961662c4ef9d2baa1`)
    console.log(response)
    resolve({response})
  })
}
