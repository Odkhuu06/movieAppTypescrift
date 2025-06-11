"use client";
import { Upcoming } from "@/movies/Upcoming";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TopRated } from "@/movies/Toprated.";
import { Popular } from "@/movies/Popular";
import { useEffect, useState } from "react";
import { MovieCarousel } from "./components/MovieCarousel";
import { Movie } from "@/types/movie";

export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState<Movie[]>([]);
  const getNowPlayingMovies = async () => {
    try {
      const responce = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await responce.json();
      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  
  return (
    <div>
      <Header />
      <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      <Upcoming />
      <TopRated />
      <Popular />
      <Footer />
    </div>
  );
}
