import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MovieCarouselItem } from "./MovieCarouselItem";
import { Movie } from "@/types/movie";
import Autoplay from "embla-carousel-autoplay";

 type MovieCardProps = {
   nowPlayingMovie: Movie[];
 };
export const MovieCarousel = ({ nowPlayingMovie }:MovieCardProps) => {
  return (
    <div>
      <Carousel
        className="relative"
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //   }),
        // ]}
      >
        <CarouselContent >
          {nowPlayingMovie?.slice(0, 5).map((movie, index) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movie.backdrop_path}`;
            return (
              <CarouselItem key={index}>
                <div>
                  <MovieCarouselItem
                    imageUrl={imageUrl}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    overview={movie.overview}
                    id={movie.id}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute ml-15" />
        <CarouselNext className="absolute mr-15" />
      </Carousel>
    </div>
  );
};
