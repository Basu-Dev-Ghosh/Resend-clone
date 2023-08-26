"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarousalCard from './CarousalCard';

var settings = {
  className:"my-20 w-[340px] md:w-[760px] lg:w-full",
  dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      arrows:false,
      pauseOnHover: true,
      autoplaySpeed: 10,
      cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 400,
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