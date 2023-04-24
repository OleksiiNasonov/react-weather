import React from 'react';
import s from './Days.module.scss';

function Tabs() {
    const tabs = [
        {value: 'For a week'},
        {value: 'For 10 days'},
        {value: 'For a month'},
    ];

    return (
        <div className={s.tabs}>
        <div className={s.tabs__wrapper}>
            {tabs.map((item) => (
                <div className={`${s.tab} ${s.active}`} key={item.value}>{item.value}</div>
            ))
            }
        </div>
        <div className={s.cancel}>Cancel</div>
        </div>
    );
}

export default Tabs;