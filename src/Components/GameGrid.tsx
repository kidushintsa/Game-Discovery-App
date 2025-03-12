import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import PlatformSelector from "./PlatformSelector";
import GameCardSkeleton from "./GameCardSkeleton";
import SortSelector from "./SortSelector";
import GameHeading from "./GameHeading";
import { QueryParams } from "../App";
interface Props{
  setSelectedPlatform:(p:Platform) => void,
  queryParams: QueryParams
}
const GameGrid = ({setSelectedPlatform,queryParams}:Props) => {
  const {selectedGenre, selectedPlatform} = queryParams
  const { data, error, isLoading } = useGames(queryParams);
  const skeleton = [1, 2, 3, 4, 5, 6];
  const showGames = !isLoading && !error && (data?.results?.length ?? 0) > 0;
  const noGames = !isLoading && !error && (data?.results?.length ?? 0) === 0;

  return (
    <div className="col-span-5 lg:col-span-4 flex flex-col min-h-screen bg-gray-900">  
      <GameHeading selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />

      {/* Filters (Platform & Sorting) */}
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <PlatformSelector setSelectedPlatform={setSelectedPlatform} selectedPlatform={selectedPlatform} />
        <SortSelector />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex w-full">
        {isLoading && (
          <div className="p-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 w-full">
            {skeleton.map((s) => <GameCardSkeleton key={s} />)}
          </div>
        )}

        {error && (
          <h1 className="text-red-500 text-center w-full">{error.message}</h1>
        )}

        {noGames && (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="font-poppins text-4xl text-gray-400">No Games Found</h1>
          </div>
        )}

        {showGames && (
          <div className="p-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 w-full">
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
