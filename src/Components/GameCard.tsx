import { Games } from "../hooks/useGames";
import ImageCrop from "../services/ImageCrop";
import CriticBadge from "./CriticBadge";
import PlatformIconList from "./PlatformIconList";
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
interface Props {
  games: Games;
}

const GameCard = ({ games }: Props) => {
  return (
    <div key={games.id} className="flex flex-col rounded-lg overflow-hidden">
      <img src={ImageCrop(games.background_image)} alt={games.name} />
      <section
        className="bg-gray-800 flex flex-col
      justify-center"
      >
        <h1 className="font-bold font-sans ms-2 p-3">{games.name}</h1>
        <header className="p-3 flex justify-between">
          <PlatformIconList
            platforms={games.parent_platforms.map((p) => p.platform)}
          />
          <CriticBadge score={games.metacritic} />
        </header>
      </section>
    </div>
  );
};

export default GameCard;
