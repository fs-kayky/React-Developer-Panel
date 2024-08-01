import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as C from './styles';


const Widget = () => {
    const [value, setValue] = useState('');
    const [weather, setWeather] = useState('');
    const [temperature, setTemperature]: any = useState(0);
    const [city, setCity] = useState('');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const API_KEY = 'a258ef58be61cf660385f93ac60c330e';
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            apiCallLocation(value, API_KEY);
            setValue('');
        }
    }

    const apiCallLocation = async (value: any, apiKey: string) => {

        try {   
        axios({
                method: 'get',
                url: `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&lang=pt_br&units=metric`,
            }).then((response: any) => {
                setWeather(response.data.weather[0].description);
                setCity(response.data.name);
                setTemperature(Math.floor(response.data.main.temp));
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
            
    }

    const getWeatherTodayByLocation = useCallback(async () => {

        navigator.geolocation.getCurrentPosition(async (e) => {

            const lat = e.coords.latitude;
            const lon = e.coords.longitude;

            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=pt_br&units=metric`);

            setWeather(data.weather[0].description);
            setTemperature(Math.floor(data.main.temp));
            setCity(data.name);
            setHours(new Date().getHours());
            setMinutes(new Date().getMinutes());

        });

    }, [])

    useEffect(() => {
        getWeatherTodayByLocation();
    }, [getWeatherTodayByLocation])


    return (
        <C.Container>

            <div className={'widget'}> 
                <div className={'widget__temperature'}>
                    <h1 className={'temperature'}>{temperature}°</h1>
                    <p className={'city'}>{city}</p>
                    <p className={'weather'}>{weather}</p>
                </div>

                <div className={'widget__search'}>
                    <h1>{hours}:{minutes}</h1>
                    <input type="text" placeholder="Pesquise uma cidade..." onKeyDown={handleKeyDown} onChange={handleOnChange} value={value} />
                </div>

            </div>

        </C.Container>
    );
};

export default Widget;