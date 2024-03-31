import movie1 from "../assets/images/movie2.png";
import starIcon from "../assets/images/starIcon.png";
import playIcon from "../assets/images/playIcon.png";
import ticketIcon from "../assets/images/TicketIcon.png";

import React from "react";
import { Link } from "react-router-dom";

const MovieHero = () => {
  return (
    <section className="py-16 flex  justify-center px-10 w-[92%]  lg:w-[90%] xl:w-[80%] mx-auto  mt-16">
      
      {/* img container */}
      <div className="relative z-50  md:flex ">
       {/* movie image */}
        <img src={movie1} alt="movie-img"  className="lg:w-[700px]  object-cover
         relative left-2 lg:top-[-20px]" />
        {/*rating container */}
        <div className="flex flex-col items-center text-white absolute 
         top-[-3rem] left-[-1.5rem] rounded-md bg-[#554F95] px-4 py-[5px] z-50 text-sm">
          <img src={starIcon} alt="estrella-icono" className="w-4" />
          <p >
            <span className="text-[19px]">8</span>/10
          </p>
          <p className="font-bold">IMBD</p>
        </div>

        <div className="">
          {/* movie descriptin container */}
          <div className=" hidden w-[90%] bg-gray-400 md:flex flex-col px-4  lg:px-10
           gap-2 py-2 lg:py-8 border-[.5rem] border-[#514a9c] rounded-lg"
           >
            <h1 className=" text-[40px] lg:text-[50px] xl:text-[70px] text-black ">
              Jhon Wick 4
            </h1>
            {/* line div */}
            <div className="max-w-[440px] h-[1.5px] bg-gray-700 "></div>
            {/* movie description */}
            <div className="text-gray-600 text-[14px] lg:text-[16px] 
            xl:text-[18px] font-semibold rounded-md mt-2 ">
              <p className="my-2  ">
                Jhon Wick 4 comienza con el personaje del título (Keanu Reeves) <br />
                huyendo de nuevo mientras tiene a cientos de asesinos pisándole
                los talones. El villano principal de la serie es el Marqués de
                Gramont (Bill SkarsGard), un lider de la Alta Mesa que sigue
                aumentando la recompensa por la cabeza de <br />
              </p>
              <p>
                Wick mientras también arregla algunos asuntos de dentro de la
                organización, incluyendo a la posible eliminación de Winston
                Scott (Ian McShane) y algunas de las decisiones que tomó en el
                pasado.
              </p>
            </div>
          </div>

        {/* trailer & review icons */}
          <div className="w-full flex flex-col  items-center 
          justify-center gap-8 lg:gap-20 mt-4 lg:mt-8   ">

          <h1 className=" md:hidden text-[45px] xl:text-[70px] text-white ">
              Jhon Wick 4
            </h1>
            <div className="flex gap-8 lg:gap-20 ">
            <div className="flex flex-col items-center ml-6">
            <img src={playIcon} alt="movie-img"  className="w-[4.5rem]   boxShadow" />
            <p className="text-gray-300 text-xl">Ver trailer</p>
            </div>

            <div className="flex flex-col items-center  mr-0 md:mr-20">
          <Link to="/reseñas">
          <img src={ticketIcon} alt="movie-img"  className="w-[4.5rem]  boxShadow " />
          </Link>
            <p className="text-gray-300 text-xl">Dejar reseña</p>
            </div>
            </div>

          
    
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieHero;
