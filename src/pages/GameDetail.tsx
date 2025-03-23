import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useState } from "react";
import GameAttribute from "../Components/GameAttribute";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const [expanded, setExpanded] = useState(false);

  if (isLoading) return "Loading...";
  if (error || !game) throw error?.message;

  const gameDes = game.description_raw || "";
  const isLong = gameDes.length > 150;
  const displayedText = !expanded && isLong ? gameDes.slice(0, 150) + "..." : gameDes;

  return (
    <div className="ms-4 mt-2 font-poppins text-white">
      <h1 className="text-3xl font-semibold">
        {game.name}
      </h1>
      <p className="mt-2 w-2/3">
        {displayedText}
        {isLong && (
          <button
            className="px-2 py-1 bg-amber-500 m-2 rounded-md"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Hide" : "Show More"}
          </button>
        )}
      </p>
      <GameAttribute game={game}/>
    </div>
  )
};

export default GameDetail;
