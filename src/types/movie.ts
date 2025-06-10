export type Movie = {
  id: number;
  title: string;
  imageUrl: string;
  vote_average: number;
  poster_path: string;
  key: number;
  overview: string;
  backdrop_path: string;
  index: number;
  videoId:string
  name: string;
  site: string;
  type: string;
 total_pages:[]
 results:[]
};
export type Genre={
  genres:{
    id:string 
    name:string
  }[]
}
export type GenreMovies={
  total_pages:[]
  results:[]
  movie:[]
}

export type MovieTrailerProps = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
  movieId:number
};


export type MovieDetails = {
  adult: boolean;
  movies:GenreMovies[]
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  movie:number;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};