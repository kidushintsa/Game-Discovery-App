import QueryObject from "../State-management/useQueryStore";

const GameHeading = () => {
  const {
    gameQuery: { selectedGenre, selectedPlatform },
  } = QueryObject();
  return (
    <header>
      <h1 className="font-poppins lg:text-4xl text-3xl mt-2 ml-4 mb-4 font-semibold">
        {selectedPlatform?.name} {selectedGenre?.name} Games
      </h1>
    </header>
  );
};

export default GameHeading;
