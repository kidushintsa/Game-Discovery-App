import axios, { AxiosRequestConfig } from "axios";
import { Fetching } from "../hooks/useGames";

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key:'21f32819aff9403c86ef8f2d6dd9fbc9'
  }
})

class APIClient<T>{
  endPoints:string;
  constructor(endPoints:string){
    this.endPoints = endPoints
  }

  getAll = (config:AxiosRequestConfig) => {
    return axiosInstance.get<Fetching<T>>(this.endPoints, config).then(res => res.data)
  }

  get = (id: string | number) => {
    return axiosInstance.get<T>(`${this.endPoints}/${id}`).then(res => res.data)  }
  getTrailer = () => axiosInstance.get<Fetching<T>>(`${this.endPoints}`).then(res => res.data)  
}

export default APIClient;
