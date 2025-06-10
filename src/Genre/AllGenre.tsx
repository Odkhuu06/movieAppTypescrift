'use client'

import { Genre } from "@/types/movie";
import { useEffect, useState } from "react";

export const AllGenres = () => {
  
  const [genres, setGenres] = useState<Genre>();
  
  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setGenres(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, []);

  const handleSelectGenre = (id:string, name:string) => {
    // const newGenreIds = genreIds.includes(id)
    //   ? genreIds.filter((t) => t !== id)
    //   : [...genreIds, id];
    // setGenreIds(id);
  };

  return (
    <div className="flex flex-wrap gap-4 bg-white">
      {genres?.genres?.map((genre, i) => (
        <div
          onClick={() => handleSelectGenre(genre.id, genre.name)}
          className="w-fit bg-white text-foreground hover:bg-none text-[12px] font-bold"
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};