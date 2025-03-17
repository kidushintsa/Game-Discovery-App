import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import NavBar from "./Components/NavBar";



const App = () => {
  return (
    <div className="bg-gray-900">
      <NavBar/>
      <div className="grid grid-cols-5 text-zinc-50 mt-3">
        <GenreList/>
        <GameGrid
        />
      </div>
    </div>
  );
};
export default App;
