"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarousalCard from './CarousalCard';

export default function Carousal(){
    return <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlay
  autoPlaySpeed={10}
  centerMode={false}
  className="my-14"
  containerClass="container-with-dots"
  customTransition="all 10s linear"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl={false}
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
  transitionDuration={1000}
>
  <CarousalCard/>
  <CarousalCard/>
  <CarousalCard/>
  <CarousalCard/>
  <CarousalCard/>
</Carousel>
}