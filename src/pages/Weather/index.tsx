import React, { useState, useEffect } from 'react';
import SearchBox from '../../components/SearchBox';
import TableForWeatherDays from '../../components/TableForWeatherDays';
import { IWeatherDays, getWeatherByLocation, IWeatherCities } from '../../services/WeatherService';

const Weather: React.FC = () => {
  const initialState: IWeatherCities = {
    owner: '',
    country: '',
    data: [
      {
        precipitaProb: '',
        tMin: '',
        tMax: '',
        predWindDir: '',
        idWeatherType: 0,
        classWindSpeed: 0,
        longitude: '',
        forecastDate: '',
        classPrecInt: 0,
        latitude: '',
      },
    ],
    globalIdLocal: '',
    dataUpdate: '',
  };

  const [weather, setWeather] = useState<IWeatherCities>(initialState);
  useEffect(() => {
    return () => {
      getWeatherByLocation().then((response) => {
        setWeather(response);
      });
    };
  }, []);
  return (
    <div>
      <div>Weather</div>
      <SearchBox></SearchBox>
      <TableForWeatherDays weatherProps={weather.data}></TableForWeatherDays>
    </div>
  );
};

export default Weather;
