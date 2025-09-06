import { useContext } from "react";
import { AboutContext } from "../Context/Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PractitionerSlider() {
  const { Practitioner } = useContext(AboutContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // Enables continuous scrolling in both directions
    waitForAnimate: false,
    swipeToSlide: true,
  };

  return Practitioner ? (
    <div className="h-[18rem] w-[18rem] md:h-[25rem] mx-auto md:w-[25rem] text-md text-center font-Poppins">
      <Slider {...settings}>
        {Practitioner.data.map((item, index) => (
          <div
            key={index}
            className=" font-Poppins text-zinc-700 flex  items-center justify-center flex-col text-center mt-20"
          >
            <div className="rounded-full mx-auto w-[12rem] h-[12rem] md:w-[12rem] md:h-[12rem] overflow-hidden">
              <img src={item.img} className="object-fit w-full h-full" alt="" />
            </div>

            <h1 className="text-md md:text-xl font-semibold">{item.name}</h1>
            <p className="text-sm md:text-lg">{item.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  ) : null;
}
