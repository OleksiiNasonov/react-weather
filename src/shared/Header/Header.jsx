
import React, {useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import GlobalSvgSelector from '../../assets/icon/global/GlobalSvgSelectors';
import { Theme } from '../../context/ThemeContext';
import useTheme from '../../hooks/UseTheme';
import fetchCurrentWeather from '../../store/thunks/fetchCurrentWeather';
import s from './Header.module.scss';
export var LAT = 50.26;
export var LON = 28.67; 

function Header() {
    const theme = useTheme();

    const dispatch = useDispatch();
        useEffect(() => {
            dispatch(fetchCurrentWeather({ lat: LAT, lon: LON}));
            
        }, [dispatch]);

    const options = [
        { value: 'city-1', label: 'Kyiv' },
        { value: 'city-2', label: 'London' },
        { value: 'city-3', label: 'Warsawa' },
    ];

    const [selectedValue, setSelectedValue] = useState(options[0]);

        function handelSelectChange(event){
            setSelectedValue(event.value) 
        }
        if (selectedValue === 'city-1') { LAT = 50.26; LON = 28.67};
        if (selectedValue === 'city-2') { LAT = 51.50; LON = -0.12574};
        if (selectedValue === 'city-3') {LAT = 52.23; LON = 21.01};
        
        dispatch(fetchCurrentWeather({ lat: LAT, lon: LON}));

    const colourStyles = {
            control: (styles) => ({...styles,
            backgroundColor: theme.theme === Theme.dark ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '195px',
            height: '35px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles) => ({...styles,color: theme.theme === Theme.dark ? '#fff' : '#000',}),
    };
        function changeTheme() {
            theme.changeTheme(theme.theme === Theme.dark ? Theme.light : Theme.dark);
        }
        return (
            <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                <GlobalSvgSelector id="headerLogo" />
                </div>
                <div className={s.title}>Weather</div>
            </div>
            <div className={s.wrapper}>
                <div onClick={() => changeTheme()}className={s.change_them}>
                <GlobalSvgSelector id="headerTheme" />
                </div>
                <div>
                <Select styles={colourStyles} options={options} value = {selectedValue} onChange={handelSelectChange}>
                </Select>
                </div>
            </div>
            </div>
        );
}

export default Header; 
