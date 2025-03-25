import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import useQueryStore from "../State-management/useQueryStore";
import Games from "../entities/Games";

export interface Fetching<T> {
  count: number;
  next: string | null;
  results: T[];
}

const apiClient = new APIClient<Games>("/games");

const useGames = () => {
  const {
    gameQuery: { searchText, selectedGenre, selectedPlatform, sortBy },
  } = useQueryStore();
  return useInfiniteQuery<Fetching<Games>, Error>({
    queryKey: [
      "games",
      searchText,
      selectedGenre?.id,
      selectedPlatform?.id,
      sortBy,
    ], // Ensure queryParams is serializable
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          platforms: selectedPlatform?.id,
          search: searchText,
          ordering: sortBy,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};

export default useGames;
