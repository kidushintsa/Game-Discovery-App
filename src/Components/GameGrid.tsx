import useGames from "../hooks/useGames";
import GameCard from "./GameCard";



const GameGrid = () => {
  const {games, error, loading} = useGames();
  
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2">
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {/* {games && <h1>no games fetched</h1>} */}
      {games.map(game => (<GameCard key={game.id} games={game} />))}
      {/* <GameCard games={game}/> */}
    </div>
  );
};

export default GameGrid;
