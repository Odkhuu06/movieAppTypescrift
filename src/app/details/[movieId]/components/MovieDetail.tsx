"use client";

import { useEffect, useState } from "react";

import { MovieDetails } from "@/types/movie";
import { MovieTrailer } from "@/app/components/MovieTrailer";
import { getMovieById } from "@/utils/getMovieById";

export const MovieDetail = ({ movieId }: { movieId: number }) => {
  const [movie, setMovie] = useState<MovieDetails>();

  useEffect(() => {
    const getMovie = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
    };

    getMovie();
  }, [movieId]);
  console.log(movie);
  return (
    <div>
      <MovieTrailer movieId={movieId} />
    </div>
  );
};