import { MovieDetails } from "@/types/movie";
import { MovieTrailer } from "./DetailsTrailer";

export const DetailsImg = ({ movie }:{movie:MovieDetails}) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movie?.poster_path}`;
  const backdropUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movie?.backdrop_path}`;

  return (
    <div className="flex gap-8 max-w-[1080px] relative">
      <img className="w-[290px] h-[428px]" src={imageUrl} alt="Poster" />
      
      <div className="relative">
        <img className="w-[760px] h-[428px]" src={backdropUrl} alt="Backdrop" />
        
        <div className="absolute flex items-center justify-center bottom-6 left-6 ">
          <MovieTrailer movieId={movie.id} />
        </div>
      </div>
    </div>
  );
};
