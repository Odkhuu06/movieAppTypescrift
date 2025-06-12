import { Details } from "./components/Details";
import { MovieDetail } from "./components/MovieDetail";



const Page = async ({ params }: { params: Promise<{ movieId: number }> }) => {
  const { movieId } = await params;
  return (
    <div>
      {/* <MovieDetail movieId={movieId} /> */}

    </div>
  );
};
export default Page;