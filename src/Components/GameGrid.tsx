import { useState } from "react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import PlatformSelector from "./PlatformSelector";
import { platform } from "../hooks/usePlatform";
import GameCardSkeleton from "./GameCardSkeleton";
import SortSelector from "./SortSelector";
import GameHeading from "./GameHeading";

const GameGrid = ({ selectedGenre, searchText }: { selectedGenre: Genre | null; searchText: string }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<platform | null>(null);
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform, searchText);
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <div className="col-span-5 lg:col-span-4 flex flex-col min-h-screen bg-gray-900">  
      {/* Ensures full height & background color stays consistent */}

      {/* Game Heading */}
      <GameHeading selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />

      {/* Filters (Platform Selector & Sort Selector) */}
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <PlatformSelector setSelectedPlatform={setSelectedPlatform} selectedPlatform={selectedPlatform} />
        <SortSelector />
      </div>

      {/* Game List / Loading / No Games Found */}
      <div className="flex-1 flex w-full">
        {isLoading ? (
          <div className="p-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 w-full">
            {skeleton.map((s) => (
              <GameCardSkeleton key={s} />
            ))}
          </div>
        ) : error ? (
          <h1 className="text-red-500 text-center w-full">{error.message}</h1>
        ) : data?.results.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="font-poppins text-4xl text-gray-400">No Games Found</h1>
          </div>
        ) : (
          <div className="p-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 w-full">
            {data?.results.map((game) => (
              <GameCard key={game.id} games={game} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameGrid;
