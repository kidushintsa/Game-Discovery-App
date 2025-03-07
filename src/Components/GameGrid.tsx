import { useState } from "react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import PlatformSelector from "./PlatformSelector";
import { platform } from "../hooks/usePlatform";
import GameCardSkeleton from "./GameCardSkeleton";
import SortSelector from "./SortSelector";
// import PlatformSelector from "./PlatformSelector";
// import PlatformSelector from "./platformSelector";



const GameGrid = ({ selectedGenre }: { selectedGenre: Genre | null }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<platform | null>(null);
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeleton = [1, 2, 3, 4, 5, 6];  // List of skeletons to render

  return (
    <>
      <div className="col-span-5 lg:col-span-4">
        <PlatformSelector setSelectedPlatform={(p) => setSelectedPlatform(p)} selectedPlatform={selectedPlatform} />
        <SortSelector/>
        
        {isLoading ? (
          <div className="p-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {skeleton.map(s => <GameCardSkeleton key={s} />)}
          </div>
        ) : (
          error ? <h1>{error.message}</h1> : (
            <div className="p-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
              {data?.map(game => (<GameCard key={game.id} games={game} />))}
            </div>
          )
        )}
      </div>
    </>
  );
};
 export default GameGrid