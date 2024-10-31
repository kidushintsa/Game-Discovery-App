import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  games: Games;
}

const GameCard = ({ games }: Props) => {
  return (
    <div key={games.id} className="flex flex-col rounded-lg overflow-hidden">
      <img src={games.background_image} alt={games.name} />
      <section
        className="bg-gray-800 h-full flex flex-col
      justify-center"
      >
        <header className="p-3">
          <h1 className="font-bold font-sans ms-2">{games.name}</h1>
          <PlatformIconList
            platforms={games.parent_platforms.map((p) => p.platform)}
          />
        </header>
      </section>
    </div>
  );
};

export default GameCard;
