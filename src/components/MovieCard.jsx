import movieImg from "../assets/images/movie.png";

const MovieCard = ({ movie }) => {
  const { title, image, btnText } = movie;

  return (
    <div className="md:w-[80%] hover:scale-105 duration-300 cursor-pointer">
      {/*title */}
      <div className="text-[17px] py-1">
        <h3>{title} </h3>
      </div>
      {/* image */}
      <img src={image} alt="pelicula-img" className="object-cover w-full " />
      {/** buy btn */}
      <div className="text-center">
        <button
          className="text-sm bg-[#554F95] py-1
       text-white w-full border-none rounded-b-2xl"
        >
          {btnText}{" "}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
