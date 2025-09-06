import { Link } from "react-router-dom";

export default function Content() {
  const content =
    "Welcome to RBG, where innovation converges with technology to shape the future of artificial intelligence. Our dedicated research team is at the forefront of crafting the Machine Learning Service Stack (MLStack) utilizing cutting-edge AI technologies. Our vision extends beyond traditional boundaries, aiming to imbue MLStack with the transformative ability to structure unstructured information derived from diverse sources such as Text, Image, Video, Speech, and Numerical Data.At RBG, we recognize the dynamic challenges faced by industries in constant evolution across various sectors. Our service team harnesses the power of MLStack's primary technologies to address these challenges head-on, providing tailored solutions that propel businesses forward. By leveraging MLStack, we empower organizations to extract meaningful insights from data, unlocking the potential hidden within complex and diverse information streams.Our commitment extends beyond mere technological advancements; we are dedicated to democratizing disruptive AI solutions. Through our efforts, we strive to make these cutting-edge technologies accessible to businesses of all sizes, fostering sustainable growth and innovation. At RBG, we believe in the transformative power of AI, and our mission is to usher in a new era of intelligent solutions that drive progress and success in the ever-evolving landscape of modern industries. Join us on this journey towards a future where AI is not just a tool but a catalyst for sustainable business growth.";

  return (
    <div
      className="flex flex-col max-w-7xl mx-auto px-4 sm:px-5 md:px-8 py-6 md:py-8 
    bg-white rounded-xl text-justify font-medium text-zinc-500 
    shadow-md hover:shadow-xl transition-all duration-300 ease-in-out
    hover:bg-gradient-to-r hover:
    font-Poppins md:mb-10 md:col-span-2 col-span-3"
    >
      {content}
      <br />
      <Link
        to="https://forms.gle/ondZQJixKRACjBay7"
        className="my-5 mx-auto px-4 py-2.5 
      text-white bg-red-600 hover:bg-red-700 
      rounded-lg shadow-md hover:shadow-lg
      max-md:text-sm transition-all duration-300
      hover:scale-105"
      >
        Join Us
      </Link>
    </div>
  );
}
