import { Movie } from "@/types/movie";
import { Link, Star } from "lucide-react";
import { MovieTrailer } from "./MovieTrailer";
type MovieCarouselItemProps = {
  movie: Movie;
};

export const MovieCarouselItem = ({ movie }: MovieCarouselItemProps) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movie.backdrop_path}`;

  return (
    <div className="relative min-h-[400px] max-w-[1440px] mx-auto overflow-hidden">
      <Link href={`/Details/${movie.id}`}>
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-96  sm:h-[320px] md:h-[480px] lg:h-[600px] object-cover"
        />
      </Link>

      <div className="absolute bottom-0 left-0 w-full max-w-full p-4 text-white sm:p-6 md:p-8 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="flex flex-col gap-4 max-w-full sm:max-w-[90%] md:max-w-[60%]">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-xs sm:text-sm">Now Playing:</p>
              <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                {movie.title}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              <p className="text-base font-semibold">
                {movie.vote_average.toFixed(1)}
              </p>
              <p className="text-base font-medium text-gray-300">/10</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm line-clamp-3">{movie.overview}</p>
          <MovieTrailer movieId={movie.id} />
        </div>
      </div>
    </div>
  );
};