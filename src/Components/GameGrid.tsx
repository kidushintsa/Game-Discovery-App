import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import PlatformSelector from "./PlatformSelector";
// import PlatformSelector from "./PlatformSelector";
// import PlatformSelector from "./platformSelector";



const GameGrid = ({selectedGenre}:{selectedGenre:Genre | null}) => {
  const {data, error, isLoading} = useGames(selectedGenre);
  
  return (
    <>
    {/* <PlatformSelector/> */}
    <div className="col-span-5 lg:col-span-4">
      <PlatformSelector/>
      {isLoading && <h1>loading...</h1>}
      {error && <h1>{error.message}</h1>}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2">
      {data?.map(game => (<GameCard key={game.id} games={game} />))}
      </div>
    </div></>
  );
};

export default GameGrid;
