import apiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";

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

// ✅ Updated Hook with search support
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, searchText: string) => 
  useQuery<Fetching<Games>, Error>({
    queryKey: ["games", selectedGenre, selectedPlatform, searchText],
    queryFn: () => 
      apiClient
        .get<Fetching<Games>>("/games", {
          params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id,
            search: searchText, 
          },
        })
        .then((res) => res.data),
    staleTime: 60 * 1000,  // ✅ Cache data for 1 minute
  });

export default useGames;
