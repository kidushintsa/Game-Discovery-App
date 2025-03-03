import useGames from "../hooks/useGames";
import GameCard from "./GameCard";



const GameGrid = () => {
  const {data, error, isLoading} = useGames();
  
  return (
    <div className="p-4 col-span-5 lg:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {/* {games && <h1>no games fetched</h1>} */}
      {data?.map(game => (<GameCard key={game.id} games={game} />))}
      {/* <GameCard games={game}/> */}
    </div>
  );
};

export default GameGrid;
