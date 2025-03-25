import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn: () => apiClient.getAll({}),
  });

export default useGenre;
