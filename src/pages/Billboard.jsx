import MovieList from "../components/MovieList"


const Billboard = () => {
  return (
    <div className='px-[.5rem] lg:px-[2.3rem] xl:px-[4.3rem] bg-[#2A303C] h-full w-full '>
      <h2 className='text-4xl font-bold text-white p-5 md:pt-20'>En cartelera</h2>
      {/* movies list component */}
           <MovieList />
    </div>
  )
}

export default Billboard