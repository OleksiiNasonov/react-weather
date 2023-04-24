
import React from 'react';
import GlobalSvgSelector from '../../../../assets/icon/global/GlobalSvgSelectors';
import s from './ThisDay.module.scss';

function ThisDay({ weather }) {
    const localTime = new Date(weather.current.dt * 1000);
    const hour = localTime.getHours();
    const minute = localTime.getMinutes();

    return (
        <div className={s.this_day}>
            <div className={s.top_block}>
                <div className={s.blockWrapper}>
                <div className={s.this_day_name}>
                        Today:
                    </div>
                    <div className={s.this_temp}>
                        {Math.round(weather.current.temp)}°
                    </div>
                </div>
                <GlobalSvgSelector id={weather.current.weather[0].main} />
            </div>
            <div className={s.bottom_block}>
                <div className={s.this_time}>
                    Time:{' '}<span>{`${hour}:${minute}`}</span>
                </div>
                <div className={s.this_city}>
                    City:{' '}<span>{weather.timezone}</span>
                </div>
            </div>
        </div>
    );
}

export default ThisDay;
