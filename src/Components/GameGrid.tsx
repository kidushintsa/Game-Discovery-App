import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Games {
  id: number;
  name: string;
}

interface FetchingGame {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await apiClient.get<FetchingGame>("/games")
        console.log(res.data.results);        
        setGames(res.data.results);

      } catch (err) {
        // Check if err is an instance of Error to safely access message
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {/* {games && <h1>no games fetched</h1>} */}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
