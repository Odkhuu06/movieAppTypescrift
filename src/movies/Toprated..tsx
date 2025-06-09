'use client'
import { MovieCardUrl } from "@/app/components/MovieCardUrl";
import { Movie } from "@/types/movie";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

  const fetchTopRated = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const data = await response.json();
      setTopRatedMovies(data.results);
    } catch (error) {
      console.error( error);
    }
  };

  useEffect(() => {
    fetchTopRated();
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[24px] font-semibold">Top Rated</h3>
        <div className="flex items-center gap-1 text-blue-500 cursor-pointer">
          <p>See more</p>
          <ArrowRight />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {topRatedMovies.slice(0, 10).map((movie:Movie) => (
          <MovieCardUrl
            key={movie.id}
            imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            vote_average={movie.vote_average}
            title={movie.title}
            id={movie.id}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};