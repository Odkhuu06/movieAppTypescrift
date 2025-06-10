import { MovieDetail } from "./components/MovieDetail";



const Page = async ({ params }: { params: Promise<{ movieId: number }> }) => {
  const { movieId } = await params;
  console.log(movieId);

  return (
    <div>
      <MovieDetail movieId={movieId} />
    </div>
  );
};
export default Page;