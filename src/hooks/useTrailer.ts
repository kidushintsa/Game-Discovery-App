import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Trailer from "../entities/Trailor";

const useTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["querykey", gameId],
    queryFn: apiClient.getDetail,
  });
};

export default useTrailer;
