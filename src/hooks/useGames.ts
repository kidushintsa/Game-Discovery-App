// import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
// import { CanceledError } from "axios";
import { useQuery } from "@tanstack/react-query";

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
interface FetchingGame {
  count: number;
  results: Games[];
}

// await apiClient.get<FetchingGame>("/games"

const useGames = () => useQuery<Games[], Error>({
  queryKey: ["games"],
  queryFn: async () => {
    const res = await apiClient.get<FetchingGame>("/games")
    return res.data.results
  }
});

export default useGames;
