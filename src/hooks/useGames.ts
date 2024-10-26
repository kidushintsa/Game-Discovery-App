import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Games {
  id: number;
  name: string;
  background_image: string;
}
interface FetchingGame {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchGames = async () => {
      try {
        const res = await apiClient.get<FetchingGame>("/games", {
          signal: controller.signal,
        });
        console.log(res.data.results);
        setGames(res.data.results);
      } catch (err) {
        // Check if err is an instance of Error to safely access message
        if (err instanceof CanceledError) {
          return;
        } else if (err instanceof Error) setError(err.message);
        else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
    return () => controller.abort();
  }, []);

  return { games, error, loading };
};

export default useGames;
