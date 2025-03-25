import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useState } from "react";
import GameAttribute from "../Components/GameAttribute";
import Trailer from "../Components/Trailer";
import ScreenShoots from "../Components/ScreenShoots";
import { ClipLoader } from "react-spinners";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const [expanded, setExpanded] = useState(false);

  if (isLoading) return <div className='grid place-items-center'><ClipLoader
  size={40}
  color="#ffffff"
  aria-label="Loading Spinner"
  data-testid="loader"
/></div>;
  if (error || !game) throw error?.message;

  const gameDes = game.description_raw || "";
  const isLong = gameDes.length > 250;
  const displayedText = !expanded && isLong ? gameDes.slice(0, 250) + "..." : gameDes;

  return (
   <div className="px-4 mb-2 font-poppins text-white grid md:grid-cols-2 gap-2">
     <div className="flex-row">
     <div>     
      <h1 className="text-3xl font-semibold">
        {game.name}
      </h1>
      <p className="mt-2">
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
    </div>
    <GameAttribute game={game}/>
     </div>
    <div className="flex-row">
    <Trailer gameId={game.id}/>
    <ScreenShoots gameId={game.id}/>
    </div>
    </div>

  )
};

export default GameDetail;
