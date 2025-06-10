


const Page = async ({ params }: { params: Promise<{ movieId: number }> }) => {
  const { movieId } = await params;
  console.log(movieId);

  return (
    <div>
    </div>
  );
};
export default Page;