import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BDO,
  mangalam,
  ministry,
  technomile,
  tera,
  amrita,
  aws,
  nvidia,
  cdii,
  spark,
  MicrosoftForStartups,
  CorditeFactory,
  IonIdea,
  opsteq,
  talentXpert,
  futran,
} from "../../assests/partners/index";
import imagine from "../../assests/images/imagine.svg";
import intelAllience from "../../assests/images/intelAllience.png";
import DPIIT from "../../assests/images/dpiit.png";
import IDEX from "../../assests/images/idex.png";

export default function ClientAcceleratorSliders() {
  const clientImages = [
    { img: BDO, name: "BDO" },
    { img: mangalam, name: "Mangalam" },
    { img: ministry, name: "Ministry" },
    { img: tera, name: "Tera" },
    { img: technomile, name: "Technomile" },
    { img: imagine, name: "Imagine" },
    { img: CorditeFactory, name: "Cordite Factory" },
    { img: IonIdea, name: "Ion Idea" },
    { img: opsteq, name: "Opsteq" },
    { img: talentXpert, name: "Talent Xpert" },
    { img: futran, name: "Futran" },
  ];

  const acceleratorImages = [
    { img: amrita, name: "Amrita" },
    { img: MicrosoftForStartups, name: "Microsoft For Startups" },
    { img: aws, name: "AWS" },
    { img: nvidia, name: "NVIDIA" },
    { img: cdii, name: "CDII" },
    { img: spark, name: "Spark" },
    { img: intelAllience, name: "Intel Alliance" },
    { img: DPIIT, name: "DPIIT" },
    { img: IDEX, name: "IDEX" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-12 px-4 md:px-8 bg-white">
      {/* Clients Section */}
      {/* <div className="mb-16">
        <h1 className="text-center font-semibold mb-10 font-Poppins text-2xl md:text-4xl text-zinc-700">
          Our Clients
        </h1>

        <div className="max-w-6xl mx-auto">
          <Slider {...sliderSettings}>
            {clientImages.map((item, index) => (
              <div key={index} className="px-6 md:px-8 lg:px-10">
                <div className="h-32 flex items-center justify-center mx-4">
                  <img
                    src={item.img}
                    className="max-h-full max-w-full object-contain mx-auto"
                    alt={item.name}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}

      {/* Accelerators Section */}
      <div>
        <h1 className="text-center font-semibold mb-10 font-Poppins text-2xl md:text-4xl text-zinc-700">
          Our Accelerators
        </h1>

        <div className="max-w-6xl mx-auto">
          <Slider {...sliderSettings}>
            {acceleratorImages.map((item, index) => (
              <div key={index} className="px-6 md:px-8 lg:px-10">
                <div className="h-32 flex items-center justify-center mx-4">
                  <img
                    src={item.img}
                    className="max-h-full max-w-full object-contain mx-auto"
                    alt={item.name}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
