import { screenshoot } from '../entities/scrernshot';
import APIClient from '../services/apiClient';
import { useQuery } from '@tanstack/react-query';

const useScreenshoot =  (gameId: number) => {
  const apiClient = new APIClient<screenshoot>(`/games/${gameId}/screenshots`);
  return useQuery({
  queryKey:["screenshoots", gameId],
  queryFn: apiClient.getDetail
})}


export default useScreenshoot