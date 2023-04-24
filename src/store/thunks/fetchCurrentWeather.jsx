import { currentWeatherSlice } from '../slices/currentWeatherSlice';
import WeaherServices from '../../servises/WeatherService';

const fetchCurrentWeather = (payload) => async (dispatch) => {
    try {dispatch(currentWeatherSlice.actions.fetchCurrentWeather());

        const res = await WeaherServices.getCurrentWeather(payload);
        if (res.status === 200) {dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));}
    } 
    catch (error) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(error.messege));
    }
};

export default fetchCurrentWeather;