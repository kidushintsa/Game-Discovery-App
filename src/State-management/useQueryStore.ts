import { create } from "zustand";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

export interface QueryParams {
  selectedGenre?: Genre | null;
  selectedPlatform?: Platform | null;
  searchText?: string;
  sortBy?: string;
}

interface GameQuery {
  gameQuery: QueryParams;
  setSearchText: (text: string) => void;
  setGenre: (genre: Genre) => void;
  setSortOrder: (sort: string) => void;
  setPlatform: (platform: Platform) => void;
}

const useQueryStore = create<GameQuery>((set) => ({
  gameQuery: {},

  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
    })),

  setGenre: (genre) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, selectedGenre: genre },
    })),

  setPlatform: (platform) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, selectedPlatform: platform },
    })),

  setSortOrder: (sortBy) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortBy },
    })),
}));

export default useQueryStore;
