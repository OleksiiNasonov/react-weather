import React from 'react';
import GlobalSvgSelector from '../../../../assets/icon/global/GlobalSvgSelectors';
import { months, week } from '../../../../servises/TimeServises';
import s from './Days.module.scss';

function Card({ day }) {
    const localTime = new Date(day.dt * 1000);
    const data = localTime.getDate();
    const month = localTime.getMonth();
    const dayWeek = localTime.getDay();

    return (
        <div className={s.card}>
            <div className={s.day__week}>
                {week[dayWeek]}
            </div>
            <div className={s.day__info}>
                {`${data} ${months[month]}`}
                </div>
            <div className={s.img}>
                <GlobalSvgSelector id={day.weather[0].main} />
            </div>
            <div className={s.temp__day}>
                Day:{' '}{Math.round(day.temp.day)}°
            </div>
            <div className={s.temp__night}>
                Night:{' '}{Math.round(day.temp.night)}°
            </div>
            <div className={s.info}>{day.weather[0].description}
            </div>
        </div>
        
    );
}

export default Card;