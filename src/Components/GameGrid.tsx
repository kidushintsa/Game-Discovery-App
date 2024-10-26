import useGames from "../hooks/useGames";



const GameGrid = () => {
  const {games, error, loading}= useGames();
  
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {/* {games && <h1>no games fetched</h1>} */}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
