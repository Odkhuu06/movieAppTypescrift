import { DarkToggle } from "@/app/components/Dark";
import { MovieCardUrl } from "@/app/components/MovieCardUrl";
import { useQueryState, parseAsInteger } from 'nuqs';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

const seeUpcoming = (id:string) => {
  
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
    const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
  const fetchUpcoming = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/upcoming?language=en-US&page=${page}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const data = await response.json();
      setUpcomingMovies(data.results);
      setTotalPage(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  fetchUpcoming();
}, [page]);

//   const fetchUpcoming = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/upcoming?language=en-US&page=${page}`,
//         {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
//           },
//         }
//       );

//       const data = await response.json();
//       setUpcomingMovies(data.results);
//     } catch (error) {
//       console.error(error);
//     }
//   };
// fetchUpcoming()
//   useEffect(() => {
//     const fetchMovies = async () => {
//       setUpcomingMovies(data?.results);
//       setTotalPage(data?.total_pages);
//     };
//     fetchMovies();
//   }, [page]);
  const previous = () => {
    setPage(page - 1);
  };
  const selectPage = (pageNumber:number) => {
    setPage(pageNumber);
  };

  const nextPage = () => {
    setPage(page + 1);
  };
  const paginations = new Array(totalPage)
    .fill(null)
    .map((_, index) => index + 1)
    .slice(0, 3);
  console.log(paginations);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[24px] font-semibold">Upcoming</h3>
        <DarkToggle/>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {upcomingMovies.map((movie) => (
          <MovieCardUrl
            key={movie.id}
            imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            vote_average={movie.vote_average}
            title={movie.title}
            id={movie.id}
              poster_path={movie.poster_path} 
          />
        ))}
      </div>
      <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious onClick={previous}/>
    </PaginationItem>
    {paginations?.map((pageNumber)=>{
    return <PaginationItem >
      <PaginationLink onClick={()=>selectPage(pageNumber)}>
{pageNumber}
      </PaginationLink>
    </PaginationItem>
})}
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext onClick={nextPage}/>
    </PaginationItem>
  </PaginationContent>
</Pagination>

    </div>
  );
};

export default seeUpcoming;