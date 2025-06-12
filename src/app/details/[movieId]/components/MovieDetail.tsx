"use client";

import { useEffect, useState } from "react";

import {MovieDetailProps} from "@/types/movie";
import { MovieTrailer } from "@/app/components/MovieTrailer";
import { getMovieById } from "@/utils/getMovieById";
import { Details } from "./Details";

export const MovieDetail = ({ movieId }: { movieId: number }) => {
  const [movie, setMovie] = useState<MovieDetailProps>();

  useEffect(() => {
    const getMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      });
      const data = await res.json();
      setMovie(data);
    };

    getMovie();
  }, [movieId]);
  console.log(movieId);
  return (
    <div>
      <Details movie={movie!}/>
      {movie && <Details movie={movie} />}

    </div>
  );
};