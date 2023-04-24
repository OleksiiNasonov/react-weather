import React from 'react';
import IndicatorSvgSelector from '../../../../assets/icon/global/indicators/indicatorSvgSelector';
import s from './ThisDayInfo.module.scss';

function ThisDayItem({ item }) {
    const { iconId, name, value } = item;
    return (
        <div className={s.item}>
        <div className={s.indicator}>
            <IndicatorSvgSelector id={iconId} />
        </div>
        <div className={s.indicator__name}>{name}</div>
        <div className={s.indicator__value}>{value}</div>
        </div>
    );
}

export default ThisDayItem;