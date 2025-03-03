import React from "react";
import useGenre, { Genre } from "../hooks/useGenres";

interface Props {
  setSelectedGenre: (g: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ setSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  return (
    <div className="bg-gray-800 hidden lg:block p-3">
      <h2 className="font-poppins text-2xl">Genres</h2>

      {error && <h1 className="text-red-500">{error.message}</h1>}
      {isLoading && <div className="text-gray-400">Loading genres...</div>}

      <React.Fragment>
        {data?.results.map((genre) => (
          <section className="flex my-3" key={genre.id}>
            <section className="w-1/4">
              <img
                src={genre.image_background}
                className="rounded-lg"
                alt={genre.name}
              />
            </section>
            <section className="w-3/4 ps-2 font-poppins font-extralight">
              <button
                onClick={() => setSelectedGenre(genre)}
                className={`hover:underline ${selectedGenre?.id === genre.id ? "font-bold" : ""}`}
              >
                {genre.name}
              </button>
            </section>
          </section>
        ))}
      </React.Fragment>
    </div>
  );
};

export default GenreList;
