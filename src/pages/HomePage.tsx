import GenreList from "../Components/GenreList";
import GameGrid from "../Components/GameGrid";

const HomePage = () => {
  return (
    <div className="grid grid-cols-5 text-zinc-50 mt-3">
      <GenreList />
      <GameGrid />
    </div>
  );
};

export default HomePage;
