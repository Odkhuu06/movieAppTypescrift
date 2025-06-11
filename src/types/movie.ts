export type Movie = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
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
  video: vidio[];
  vote_average: number;
  vote_count: number;
  results:[]
};
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
};

export type MovieCastAndCrewType = {
  adultP: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  job: string;
  department: string;
  profile_path: string;
  name: string;
  popularity: number;
  crew: [];
  cast: [];
};

export type MovieTeamType = {
  id: number;
  cast: MovieCastAndCrewType[];
  crew: MovieCastAndCrewType[];
};

export type Genre = {
  id: number;
  name: string;
};
export type vidio = {
  id: number;
  name: string;
  vidio: boolean;
};