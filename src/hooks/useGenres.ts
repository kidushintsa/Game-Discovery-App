import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import { Fetching } from "./useGames"

export interface Genre{
  id:number,
  name:string,
  image_background: string
}

apiClient.get<Fetching<Genre>>('/genres').then(res => res.data)

const useGenre = () => useQuery({
  queryKey:['genre'],
  queryFn: () => apiClient.get<Fetching<Genre>>('/genres').then(res => res.data)})

export default useGenre