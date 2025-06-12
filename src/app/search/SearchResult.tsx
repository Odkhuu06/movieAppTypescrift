import { Movie, ResultsProps } from "@/types/movie";
import { SearchResultCard } from "./SearchResultCard";
type SearchProps={
  movies:Movie
  setSearchValue:(value:string)=>void
  
}
export const SearchResult = ({ movies,setSearchValue}:SearchProps) => {
  return (
    <div className="absolute z-50 p-3 border rounded-lg top-12 bg-background">
      {movies &&
        movies?.results
          ?.slice(0, 5)
          .map((movie:ResultsProps) => (
            <SearchResultCard  key={movie.id} movie={movie} setSearchValue={setSearchValue} />
          ))}
    </div>
  );
};