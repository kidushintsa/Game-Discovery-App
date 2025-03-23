import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useState } from "react";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const [expanded, setExpanded] = useState(false);

  if (isLoading) return "Loading...";
  if (error || !game) throw error?.message;

  const gameDes = game.description_raw || "";
  const isLong = gameDes.length > 80;
  const displayedText = !expanded && isLong ? gameDes.slice(0, 80) + "..." : gameDes;

  return (
    <>
      <h1 className="font-poppins text-white text-3xl ms-4 mt-2 font-semibold">
        {game.name}
      </h1>
      <p className="font-poppins text-white">
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
    </>
  );
};

export default GameDetail;
