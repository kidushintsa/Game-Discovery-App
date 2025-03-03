// import React from 'react'
import { useState } from "react";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import NavBar from "./Components/NavBar";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <div className="grid grid-cols-5 bg-gray-900 text-zinc-50">
        <NavBar/>
        <GenreList selectedGenre={selectedGenre}  setSelectedGenre={(genre) => setSelectedGenre(genre)}/>
        <GameGrid selectedGenre={selectedGenre} />
    </div>
  );
};

export default App;
// bg-gray-800 hidden lg:block