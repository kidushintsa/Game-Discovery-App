import axios, { AxiosRequestConfig } from "axios";
import { Fetching } from "../hooks/useGames";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MY_BASE_URL,
  params: {
    key: import.meta.env.VITE_MY_API_KEY,
  },
});

class APIClient<T> {
  endPoints: string;
  constructor(endPoints: string) {
    this.endPoints = endPoints;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<Fetching<T>>(this.endPoints, config)
      .then((res) => res.data);
  };

  get = (id: string | number) => {
    return axiosInstance
      .get<T>(`${this.endPoints}/${id}`)
      .then((res) => res.data);
  };
  getDetail = () =>
    axiosInstance.get<Fetching<T>>(`${this.endPoints}`).then((res) => res.data);
}

export default APIClient;
