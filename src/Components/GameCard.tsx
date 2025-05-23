import { Link } from "react-router-dom";
import Games from "../entities/Games";
import ImageCrop from "../services/ImageCrop";
import CriticBadge from "./CriticBadge";
import PlatformIconList from "./PlatformIconList";
import { motion } from "framer-motion";
interface Props {
  games: Games;
}

const GameCard = ({ games }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={"/game/" + games.slug}
        key={games.id}
        className="flex flex-col rounded-lg overflow-hidden max-h-fit hover:scale-[1.1] transition delay-15 duration-15 ease-in"
      >
        <img
          className="w-full object-cover"
          src={ImageCrop(games.background_image, 600, 400)}
          alt={games.name}
        />
        <section
          className="bg-gray-800 flex flex-col
      justify-center"
        >
          <header className="p-3 flex justify-between">
            <PlatformIconList
              platforms={games.parent_platforms.map((p) => p.platform)}
            />
            <CriticBadge score={games.metacritic} />
          </header>
          <Link
            to={"/game/" + games.slug}
            className="font-bold font-sans ms-2 p-3"
          >
            {games.name}
          </Link>
        </section>
      </Link>
    </motion.div>
  );
};

export default GameCard;
