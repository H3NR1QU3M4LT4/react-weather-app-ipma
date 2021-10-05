import axiosInstance from './AxiosInterceptor';

export interface ILocation {
  idRegiao: number;
  idAreaAviso: string;
  idConcelho: number;
  globalIdLocal: number;
  latitude: string;
  idDistrito: number;
  local: string;
  longitude: string;
}

/* export const createUserCV = async (formUserCV: IUserCV) => {
  let res = await axiosInstance.post(
    "http://localhost:3001/createCvs",
    formUserCV
  );
  return res.data;
}; */

export const getLocation = async (): Promise<ILocation[]> => {
  return await axiosInstance
    .get<ILocation[]>('https://api.ipma.pt/open-data/distrits-islands.json')
    .then((response) => {
      return response.data;
    });
};
