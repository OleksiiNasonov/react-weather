import axios from 'axios';

export default class WeaherServices {
    static getCurrentWeather(city) {
        const { lon, lat } = city;
        return axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=en&units=metric&appid=93f2871033e2c9eff67e65ae107bd299`)    }
}