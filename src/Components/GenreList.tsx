// import React from 'react'
import React from "react";
import useGenre from "../hooks/useGenres";
// import ImageCrop from '../services/ImageCrop';s

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  return (
    <div className="bg-gray-800 hidden lg:block p-3">
      <h2 className="font-poppins text-2xl">Genres</h2>
      {error && <h1>{error.message}</h1>}
      {isLoading && <h1>loading...</h1>}
      <React.Fragment>
        {data?.results.map((genre) => (
          <section className="flex my-3" key={genre.id}>
            <section className="w-1/4"><img src={genre.image_background} className="rounded-lg" alt="img" /></section>
            <section className="w-3/4 ps-2 font-poppins font-extralight
">{genre.name}</section>
          </section>
        ))}
      </React.Fragment>
    </div>
  );
};

export default GenreList;
