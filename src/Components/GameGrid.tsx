import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import PlatformSelector from "./PlatformSelector";
import GameCardSkeleton from "./GameCardSkeleton";
import SortSelector from "./SortSelector";
import GameHeading from "./GameHeading";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";



const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];
  const showGames = !isLoading && !error && (data?.pages?.length ?? 0) > 0;
  const noGames = !isLoading && !error && (data?.pages?.length ?? 0) === 0;

  return (
    <div className="col-span-5 lg:col-span-4 flex flex-col min-h-screen bg-gray-900">
      <GameHeading/>
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <PlatformSelector/>
        <SortSelector />
      </div>
      <div className="flex-1 flex w-full">
        {isLoading && (
          <div className="p-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 w-full">
            {skeleton.map((s) => (
              <GameCardSkeleton key={s} />
            ))}
          </div>
        )}

        {error && <h1 className="text-red-500 text-center w-full">{error.message}</h1>}

        {noGames && (
          <div className="flex-1 flex items-center justify-center">
            <h1 className="font-poppins text-4xl text-gray-400">No Games Found</h1>
          </div>
        )}

        {showGames && (
          <InfiniteScroll
            dataLength={data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0} // Current length of items
            next={fetchNextPage} // Function to load more items
            hasMore={hasNextPage} // Boolean to determine if more items are available
            loader={
              <div className="flex justify-center py-4">
                <ClipLoader
                  loading={hasNextPage}
                  size={40}
                  color="#ffffff"
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            }
          >
            <div className="p-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 w-full">
              {data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.results.map((game) => (
                    <GameCard key={game.id} games={game} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default GameGrid;
