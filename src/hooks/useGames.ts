// import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
// import { CanceledError } from "axios";
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

// await apiClient.get<FetchingGame>("/games"

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useQuery<Games[], Error>({
  queryKey: ["games", selectedGenre, selectedPlatform],
  queryFn:() => apiClient.get<Fetching<Games>>("/games", {params:{genres: selectedGenre?.id,
    platforms:selectedPlatform?.id
  }}).then(res => res.data.results)
}
)

export default useGames;
