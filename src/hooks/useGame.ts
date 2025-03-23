import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient"
import { Games } from "../entities/Games"

const apiClient = new APIClient<Games>("/games")
const useGame = (slug:string) => useQuery({
  queryKey: ["game", slug],
  queryFn: () => apiClient.get(slug)
})

export default useGame;