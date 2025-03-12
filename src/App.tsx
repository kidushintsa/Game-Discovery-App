// import React from 'react'
import { useState } from "react";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import NavBar from "./Components/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
export interface QueryParams {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  searchText: string;
}

const App = () => {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    selectedGenre: null,
    selectedPlatform: null,
    searchText: "",
  });
  return (
    <div className="bg-gray-900">
      <NavBar
        onSearch={(text) =>
          setQueryParams((prev) => ({
            ...(prev),
            searchText: text,
          }))
        }
      />
      <div className="grid grid-cols-5 text-zinc-50 mt-3">
        <GenreList
          selectedGenre={queryParams.selectedGenre}
          setSelectedGenre={(genre) =>
            setQueryParams((prev) => ({
              ...(prev || {
                selectedGenre: null,
                selectedPlatform: null,
                searchText: "",
              }),
              selectedGenre: genre,
            }))
          }
        />

        <GameGrid
          queryParams={queryParams}
          setSelectedPlatform={(platform: Platform) =>
            setQueryParams((prev) => ({
              ...prev,
              selectedPlatform: platform,
            }))
          }
        />
      </div>
    </div>
  );
};
export default App;
// bg-gray-800 hidden lg:block
