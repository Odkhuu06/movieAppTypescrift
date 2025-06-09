import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AllGenres } from "./AllGenre";
import { Footer } from "@/app/components/Footer";
import { Movie } from "@/types/movie";
import { MovieCard } from "@/app/components/MovieCard";
import { Separator } from "@/components/ui/separator";

const GenreSelect = () => {
  const [genreMovies, setGenreMovie] = useState<Movie>({});
  const router = useRouter();
  const genreIds = router.query.genreIds;
 
const updatedGenreIds =
  typeof genreIds === 'string'
    ? genreIds.split(',')
    : Array.isArray(genreIds)
      ? genreIds
      : [];

   console.log( updatedGenreIds);

  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${updatedGenreIds}&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );


      const movies = await response.json();
      setGenreMovie(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, [genreIds]);
console.log("genreMovies?.results:::::::::",genreMovies?.results);
console.log(genreMovies);

  return (
    <div className="max-w-[1280px] mx-auto">
      <h1>Search filter</h1>
      <div className="flex mt-8">
        <div className="w-[387px]">
          <AllGenres/>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="w-[804px] flex flex-col">
          <h1 className="text-4xl">81 titles in "Animation"</h1>
          <h1>{genreMovies?.total_pages}</h1>
          <div className="w-[804px] flex flex-wrap gap-2">
          {genreMovies?.results?.map((movie) => (
            <MovieCard {...movie} id={movie.id} />
          ))}
          </div>
        </div>
      </div>
          <Footer/>
    </div>
  );
};
export default GenreSelect;