import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieHero from "./MovieHero";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  return (
    <div className="bg-[url('./assets/images/herobg.png')] bg-no-repeat bg-center bg-cover flex justify-center items-center h-screen ">
    
    <div className="w-[100%]  mx-auto  ">
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={9000}
        centerMode={false}
        infinite
        showDots={false}
        responsive={responsive}
      >

       <MovieHero />
       <MovieHero />
       <MovieHero />
        
      </Carousel>
    </div>
  </div>
  )
}

export default Slider