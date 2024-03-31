import React from 'react'
import MovieCard from './MovieCard'
import movieImg from "../assets/images/movie.png"

{/* movies data */}
const infoMovieCard = [
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},
    {title:"Jhon Wick 4", image: movieImg, btnText:"Comprar Ticket"},

]

const MovieList = () => {
  return (
    <div className='p-6 md:p-16 gap-16 grid grid-cols-2 md:grid-cols-3 h-full
    lg:grid-cols-4 xl:grid-cols-5 items-center justify-center  text-white'>
        {/*movie card component */}
        {
            infoMovieCard.map((movie, i) => (
                <MovieCard movie={movie} key={i} />
            ))
        }
    </div>
  )
}

export default MovieList