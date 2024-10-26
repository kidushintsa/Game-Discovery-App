import { Games } from "../hooks/useGames";

interface Props {
  games: Games;
}

const GameCard = ({ games }: Props) => {
  return (
    <div
      key={games.id}
      className="flex flex-col rounded-lg overflow-hidden border"
    >
      <img src={games.background_image} alt={games.name} />
      <section className="bg-gray-800 h-full">
        <header>
          <h1 className="font-bold font-sans">{games.name}</h1>
        </header>
      </section>
    </div>
  );
};

export default GameCard;
