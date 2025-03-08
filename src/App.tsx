// import React from 'react'
import { useState } from "react";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import NavBar from "./Components/NavBar";
import { Genre } from "./hooks/useGenres";
// import { Platform } from "./hooks/useGames";


const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [searchText, setSearchText] = useState("")
  return (
    <div className="bg-gray-900">
    <NavBar onSearch={(text) => setSearchText(text)} />
<div className="grid grid-cols-5 text-zinc-50 mt-3">
        <GenreList selectedGenre={selectedGenre}  setSelectedGenre={(genre) => setSelectedGenre(genre)}/>
        <GameGrid selectedGenre={selectedGenre} searchText={searchText} />
        </div>
    </div>
  );
};

export default App;
// bg-gray-800 hidden lg:block