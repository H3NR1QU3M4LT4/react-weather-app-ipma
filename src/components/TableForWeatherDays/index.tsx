/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IWeatherDays } from '../../services/WeatherService';

interface IWeatherProps {
  weatherProps: IWeatherDays[];
}

const TableForWeatherDays: React.FC<IWeatherProps> = ({ weatherProps }) => {
  return (
    <div>
      <div className="max-w-screen-md rounded overflow-hidden shadow-lg bg-gray-100 py-3 m-5 mb-10">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Day 1</th>
              <th>Day 2</th>
              <th>Day 3</th>
              <th>Day 4</th>
              <th>Day 5</th>
            </tr>
          </thead>
          <tbody>
            {weatherProps.map((weatherDay, index) => (
              <tr key={index}>
                <td>{weatherDay.tMin}</td>
                <td>{weatherDay.tMax}</td>
                <td>{weatherDay.idWeatherType}</td>
                <td>{weatherDay.forecastDate}</td>
                <td>{weatherDay.precipitaProb}</td>
                <td>{weatherDay.classPrecInt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableForWeatherDays;
