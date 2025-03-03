// import React from 'react'
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="grid grid-cols-5 bg-gray-900 text-zinc-50">
        <NavBar/>
        <GenreList/>
        <GameGrid />
    </div>
  );
};

export default App;
// bg-gray-800 hidden lg:block