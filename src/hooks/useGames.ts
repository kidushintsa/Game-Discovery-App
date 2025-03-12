import { useInfiniteQuery } from "@tanstack/react-query";
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
  next: string | null;
  results: T[];
}

const apiClient = new APIClient<Games>("/games");

const useGames = (queryParams: QueryParams) => 
  useInfiniteQuery<Fetching<Games>, Error>({
    queryKey: ["games", queryParams],  // Ensure queryParams is serializable
    queryFn:  ({ pageParam }) => apiClient.getAll({
        params: {
          genres: queryParams.selectedGenre?.id,
          platforms: queryParams.selectedPlatform?.id,
          search: queryParams.searchText,
          page: pageParam,
        },
      })     
    ,
    initialPageParam: 1, 
    getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
  });

export default useGames;
