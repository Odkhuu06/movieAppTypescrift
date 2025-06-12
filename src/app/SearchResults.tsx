import { AllGenres } from "@/Genre/AllGenre";
import { SearchResultCard } from "@/search/SearchResultCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}search/movie?query=${query}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      setResults(data.results || []);
    };

    fetchSearchResults();
  }, [query]);
  console.log(setResults);

  return (
    <div className=" flex ">
      <div className="w-1/2 flex-wrap">
        <h1 className="mb-4 text-xl font-semibold ">
          Search results for "{query}"
        </h1>
        {results.slice(0,5).map((movie) => (
          <SearchResultCard movie={movie} />
          // <li key={movie.id}>{movie.title}</li>
        ))}
      </div>
      <div><AllGenres className="w-1/2 flex-wrap"/></div>
    </div>
  );
};

export default SearchPage;