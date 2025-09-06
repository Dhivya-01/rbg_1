import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Training() {
  return (
    <div className="font-Poppins px-5 min-h-3.5 max-w-7xl mx-auto space-y-5 md:space-y-10 py-20 text-center ">
      <h1 className="text-xl md:text-5xl font-bold text-zinc-700">
        RBG AI Training
      </h1>
      <h2 className="text-md md:text-2xl text-zinc-600">
        Upskilling & Reskilling intiatives to make AI for Everyone is possible
      </h2>
      <div className="flex flex-col space-y-5 md:flex-row py-10 justify-center items-center">
        <div className="w-1/2 space-y-5 md:space-y-10 flex flex-col items-center">
          <FaGithub style={{ fontSize: "10rem", color: "#444" }} />
          {/* <Link
            to="https://github.com/rbg-research/AI-Training"
            className="text-white bg-red-500 px-4 py-2 rounded shadow hover:bg-red-600 hover:shadow-lg hover:scale-105"
          >
            AI Training
          </Link> */}
          <a
  href="https://github.com/rbg-research/AI-Training"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white bg-red-500 px-4 py-2 rounded shadow hover:bg-red-600 hover:shadow-lg hover:scale-105"
>
  AI Training
</a>
        </div>
        <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-50">
          <p className="md:text-lg max-w-sm text-justify text-zinc-500 ">
            Discover a wealth of Open Source AI Training materials on our Github
            repository. Empower your learning journey with our curated resources
            designed to enhance your skills and knowledge in the dynamic field
            of artificial intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
