import { Button } from "@/components/ui/button";
import { Movie } from "@/types/movie";
import { getMovieTrailer } from "@/utils/getMovieTariler";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Youtube } from "lucide-react";
import { useEffect, useState } from "react";
 type MovieCardProps = {
   movieId: number;
 };
export const MovieTrailer = ({ movieId }:MovieCardProps) => {
    const [trailer, setTrailer] = useState<Movie[]>([]);
  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailer(movieId);
        setTrailer(data.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer:", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);
  const movieTrailer = trailer.find(
    (video) => video.name === "Official Trailer"
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Watch Trailer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit">
        <Youtube
          videoId={movieTrailer?.key}
          opts={{
            height: "561",
            width: "997",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};