import { MovieDetails } from "@/types/movie";
import { Star } from "lucide-react";

export const DetailsHeader = ({ movie }:{movie:MovieDetails}) => {
  const formatRuntime = (minutes:number) => {
    if (!minutes) return;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} h ${remainingMinutes} m`;
  };
  const formatNumber = (num:number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "k";
    return num;
  };

  return (
    <div className=" w-full max-w-[1080px] flex justify-between">
      <div>
        <h1 className="text-[36px]">{movie.title}</h1>
        <div className="flex">
          <p>{movie.release_date}</p>
          <p>·</p>
          <p>{formatRuntime(movie.runtime)}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p>Rating</p>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
            <div className="flex">
            <p>{movie.vote_average}</p>
            <p>/10</p>
            </div>
          </div>
          <div className="flex">
            <h1>Vote:</h1>
           <p>{formatNumber(movie.vote_count)}</p>
           </div>
        </div>
      </div>
    </div>
  );
};
