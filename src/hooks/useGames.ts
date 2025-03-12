import { useQuery } from "@tanstack/react-query";
import { QueryParams } from "../App";
import APIClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Fetching<T> {
  count: number;
  results: T[];
}
const apiClient = new APIClient<Games>("/games")
const useGames = (queryParams:QueryParams) => 
  useQuery({
    queryKey: ["games", queryParams],
    queryFn: () => 
      apiClient
        .getAll({
          params: {
            genres: queryParams.selectedGenre?.id,
            platforms: queryParams.selectedPlatform?.id,
            search: queryParams.searchText, 
          },
        })
        ,
    staleTime: 60 * 1000,  
  });

export default useGames;
