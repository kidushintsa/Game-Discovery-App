import React from "react";
import useGenre, { Genre } from "../hooks/useGenres";

interface Props {
  setSelectedGenre: (g: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ setSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  return (
      <div className="hidden lg:block p-2">
        <h2 className="font-poppins text-2xl mb-2 font-semibold">Genres</h2>
        {error && <h1 className="text-red-500">{error?.message}</h1>}
        {isLoading && <div className="text-gray-400">Loading genres...</div>}
        {data?.results.map((genre) => (
          <section className="grid grid-cols-4 mb-2" key={genre.id}>
            <section className="">
              <img
                src={genre.image_background}
                className="rounded-lg object-cover"
                alt={genre.name}
              />
            </section>
            <section className="ps-2 font-poppins font-extralight col-span-3">
              <button
                onClick={() => setSelectedGenre(genre)}
                className={`hover:underline ${selectedGenre?.id === genre.id ? "font-bold" : ""}`}
              >
                {genre.name}
              </button>
            </section>
          </section>
        ))}
      </div>
  );
};

export default GenreList;
