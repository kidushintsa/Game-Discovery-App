import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import { Fetching } from "./useGames"

export interface platform{
  id:number,
  name:string,
  slug:string
}

const usePlatform = () => useQuery({
  queryKey:['platform'],
  queryFn: () => apiClient.get<Fetching<platform>>('/platforms/lists/parents').then(res => res.data)})


export default usePlatform