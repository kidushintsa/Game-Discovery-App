import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient"

export interface Genre{
  id:number,
  name:string,
  image_background: string
}

const apiClient = new APIClient<Genre>("/genres")


const useGenre = () => useQuery({
  queryKey:['genre'],
  queryFn: () => apiClient.getAll({})})

export default useGenre