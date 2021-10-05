import axiosInstance from './AxiosInterceptor';

export interface IWeatherCities {
  owner: string;
  country: string;
  data: IWeatherDays[];
  globalIdLocal: string;
  dataUpdate: string;
}

export interface IWeatherDays {
  precipitaProb: string;
  tMin: string;
  tMax: string;
  predWindDir: string;
  idWeatherType: number;
  classWindSpeed: number;
  longitude: string;
  forecastDate: string;
  classPrecInt: number;
  latitude: string;
}

/* export const createUserCV = async (formUserCV: IUserCV) => {
  let res = await axiosInstance.post(
    "http://localhost:3001/createCvs",
    formUserCV
  );
  return res.data;
}; */

export const getWeatherByLocation = async (): Promise<IWeatherCities> => {
  return await axiosInstance
    .get<IWeatherCities>(
      'http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json',
    )
    .then((response) => {
      console.log('service', response.data);
      return response.data;
    });
};
