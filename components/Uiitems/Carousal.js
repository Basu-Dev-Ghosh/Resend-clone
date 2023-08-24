"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarousalCard from './CarousalCard';

var settings = {
  className:"my-20 w-[386px] md:w-full",
  dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      pauseOnHover: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

      }
    }
  ]
};

export default function Carousal(){
    return <Slider {...settings}>
  <CarousalCard/>
  <CarousalCard/>
  <CarousalCard/>
  <CarousalCard/>
  <CarousalCard/>
</Slider>
}