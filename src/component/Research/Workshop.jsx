import React from "react";
import Slider from "../Slider";
import img1 from "../../assests/Programs/img1.svg";
import img2 from "../../assests/Programs/img2.svg";
import img3 from "../../assests/Programs/img3.svg";
import img4 from "../../assests/Programs/img4.svg";

const data = [
  {
    venue:
      "St Joseph's College Of Engineering, OMR, Semmancheri, Chennai, Tamil Nadu 600119.",
    Date: "01 to 07, April 2025",
    img: img1,
    link: "",
    disable: false,
  },
  {
    venue: "SREC Campus, Coimbatore",
    Date: "18, march 2025",
    img: img1,
    link: "",
    disable: false,
  },
  {
    venue: "Amrita University,Ettimadai Coimbatore",
    Date: "18, October 2024",
    img: img1,
    link: "",
    disable: false,
  },
  {
    venue: "SREC Campus, Coimbatore",
    Date: "17 to 19, September 2024",
    img: img1,
    link: "",
    disable: false,
  },
  {
    venue: "Amrita University,Ettimadai Coimbatore",
    Date: "20 & 21, April 2022",
    img: img2,
    link: "",
    disable: false,
  },
  {
    venue:
      "St Joseph's College Of Engineering, OMR, Semmancheri, Chennai, Tamil Nadu 600119.",
    Date: "March 04 - 07, 2024",
    img: img1,
    link: "/llm-chennai",
    disable: false,
  },
  {
    venue:
      "SREC SPARK Incubation Foundation,SREC Campus,Coimbatore, Tamil Nadu.",
    Date: "Febrauary 23 - 24, 2024",
    img: img4,
    link: "/llm-cse",
    disable: false,
  },
  {
    venue:
      "SREC SPARK Incubation Foundation,SREC Campus,Coimbatore, Tamil Nadu.",
    Date: "January 08 - 12, 2024",
    img: img1,
    link: "/llm",
    disable: false,
  },
];

export default function Workshop() {
  return (
    <div className="w-full py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our Workshops
      </h1>
      <Slider data={data} />
    </div>
  );
}
