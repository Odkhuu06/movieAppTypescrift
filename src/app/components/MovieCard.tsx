import { Star } from "lucide-react";
import Link from "next/link";
type MovieCard = {
  id: number;
  title: string;
  vote_average: number;
  poster_path:string
};

export const MovieCard = ({ poster_path, vote_average, title, id }:MovieCard) => {
    return (
        <div className="flex flex-col">
            <Link href={`/Details/${id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    className="w-[157.5px] h-[233px] xl:w-[230px] xl:h-[340px] md:w-[230px] md:h-[340px]"
                />
                <div className=" bg-[#f4f4f5] dark:bg-gray-900  w-[157.5px] h-[76px] xl:h-[95px] xl:w-[230px] md:h-[95px] md:w-[230px] ">
                    <div className="flex gap-1 p-2">
                        <Star
                            color="rgba(253, 224, 71, 1)"
                            fill="rgba(253, 224, 71, 1)"
                            className="h-[16px] w-[16px]"
                        />
                        <div className="flex">
                            <p className="text-xs">{vote_average ? vote_average.toFixed(1) : ""}</p>
                            <p className="text-xs">/10</p>
                        </div>
                    </div>
                    <p className="p-2 text-sm">{title}</p>
                </div>
            </Link>
        </div>
    );
};