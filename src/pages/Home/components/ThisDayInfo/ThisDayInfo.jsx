import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/image/Cloud.png';
import ThisDayItem from './ThisDayItem';

function ThisDayInfo({ weather }) {
    const items = [
        {
        iconId: 'temp',
        name: 'Temperature',
        value: `${Math.round(weather.current.temp)}° - Feels like ${Math.round(weather.current.feels_like)}°`,
        },
        {
        iconId: 'humidity',
        name: 'Humidity',
        value: `${weather.current.humidity}%`,
        },
        {
        iconId: 'precipitation',
        name: 'Precipitation',
        value: `${weather.current.weather[0].description}`,
        },
        {
        iconId: 'wind',
        name: 'Wind',
        value: `${Math.round(weather.current.wind_speed)} m/s`,
        },
    ];
    
    return (
        <div className={s.this__day__info}>
        <div className={s.thisDayInfoItems}>
            {
            items.map((item) => (<ThisDayItem key={item.iconId} item={item} />))
            }
        </div>
        <img className={s.cloud__img} src={cloud} alt="Cloud" />
        </div>
    );
}

export default ThisDayInfo;