import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

export interface platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () => apiClient.getAll({}),
  });

export default usePlatform;
