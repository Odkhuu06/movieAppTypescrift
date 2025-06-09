
import { Movie } from "@/types/movie";
import { Badge } from "lucide-react";
import {
  parseAsArrayOf,
  parseAsInteger,
  useQueryState,
} from "next-usequerystate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export const AllGenres = () => {
  const router = useRouter();
  const [genres, setGenres] = useState<Movie[]>([]);


  

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

  const handleSelectGenre = (id, name) => {
    // const newGenreIds = genreIds.includes(id)
    //   ? genreIds.filter((t) => t !== id)
    //   : [...genreIds, id];
    // setGenreIds(id);
    router.push(`/genres?genreIds=${id}`);
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
        // <Badge
        //   key={i}
        //   className="w-fit bg-white text-foreground hover:bg-none text-[12px] font-bold dark:bg-black light:bg-white"
        //   onClick={() => handleSelectGenre(genre.id, genre.name)}
        // >
        //   gg
        // </Badge>
      ))}
    </div>
  );
};