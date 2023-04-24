import {React} from 'react';
import { useSelector } from 'react-redux';
import selectCurrentWeatherData from '../../servises/selectors';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';



function Home() {
    const { weather } = useSelector(selectCurrentWeatherData);
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather} />
                <ThisDayInfo weather={weather} />
            </div>
            <Days weather={weather} />
        </div>
    );
}

export default Home;