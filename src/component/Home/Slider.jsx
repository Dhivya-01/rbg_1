import { Carousel, Flowbite } from "flowbite-react";
export default function Slider() {
  const customTheme = {
    svg: {
      color: {
        primary: "#333",
      },
    },
  };

  return (
    <div className="bg-gray-50 h-72 md:h-96 font-Poppins md:font-Inter text-lg md:text-3xl lg:text-4xl  text-center  text-zinc-800">
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel color="primary">
          <div className="flex h-full items-center p-8 md:p-24  justify-center ">
          MLloOps structures unstructured data using advanced Machine Learning, Deep Learning, and Generative AI models
          </div>
          <div className="flex h-full items-center p-8 md:p-24  justify-center  ">
          With collaborative automation and accelerated ML workflows, MLloOps transforms raw data into actionable insights
          </div>
          <div className="flex h-full items-center p-8 md:p-24 justify-center ">
          Engineered for enterprises, MLloOps scales AI solutions to unlock the true value of unstructured data
          </div>
        </Carousel>
      </Flowbite>
    </div>
  );
}
