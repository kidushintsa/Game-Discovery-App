import { Platform } from "./Platform";


export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  slug: string;
  description_raw: string;
}
