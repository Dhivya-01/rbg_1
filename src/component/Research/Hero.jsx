import { Link } from "react-router-dom";
import {
  FaLinode,
  FaLaptopMedical,
  FaNotesMedical,
  FaBrain,
} from "react-icons/fa";
import { ImCogs } from "react-icons/im";
import { FaLanguage } from "react-icons/fa";
import { CgFormatText } from "react-icons/cg";
import { RiMicFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const data = [
    {
      title: "SMM4H",
      content:
        "System leveraging zero and few-shot prompting with LLMs to tackle insomnia prediction and corresponding textual evidence extraction from clinical notes",
      link: "https://github.com/rbg-research/SMM4H-2025",
      node: (
        <div className="flex justify-center items-center gap-2">
          <FaBrain className="text-5xl text-red-300" />
          <FaNotesMedical className="text-5xl text-red-300" />
        </div>
      ),
    },
    {
      title: "Floor-Plan-Detection",
      content: "Floor plan object detection with super resolution",
      link: "https://github.com/rbg-research/Floor-Plan-Detection",
      node: <FaLinode className="text-6xl mx-auto text-red-300" />,
    },
    {
      title: "D-Voice Detection",
      content:
        "Evaluating High-Dimensional Speaker Embedding to Detect Deep Voices",
      link: "",
      node: <RiMicFill className="text-6xl mx-auto text-red-300" />,
    },
    {
      title: "MFR",
      content: "Zero-shot Machining Feature Retrieval",
      link: "https://github.com/rbg-research/Machining-Feature-Retrieval",
      node: <ImCogs className="text-6xl mx-auto text-red-300" />,
    },
    {
      title: "CoRePooL",
      content: "Corpus for resource poor language",
      link: "https://github.com/rbg-research/CoRePooL",
      node: <FaLanguage className="text-6xl mx-auto text-red-300" />,
    },
    {
      title: "OCR Enhancer",
      content:
        "Performing Text Segmentation to Improve OCR on Multi Scene Text",
      link: "https://github.com/rbg-research/OCR-Enhancer",
      node: <CgFormatText className="text-6xl mx-auto text-red-300" />,
    },
    // {
    //   title: "AL4SM",
    //   content: "Performance Efficient Fine Tuning of Language Models for Socio-Medical Data",
    //   link: "https://www.sciencedirect.com/science/article/pii/S0952197623003986",
    //   node: (
    //     <FaLaptopMedical className="text-6xl mx-auto text-red-300" />
    //   ),
    // },
    {
      title: "EACL",
      content:
        "Evaluating Large Pre-Trained Model for Speech Recognition and Multi-Accented Speech Classification in Low-Resource Languages",
      link: "https://github.com/rbg-research/EACL-2024",
      node: <RiMicFill className="text-6xl mx-auto text-red-300" />,
    },
  ];

  return (
    <div className="py-12 text-center bg-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-7xl mx-auto font-Poppins space-y-8"
        ref={ref}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-6xl font-bold text-zinc-700"
        >
          Research Contributions
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl text-zinc-600 mb-8"
        >
          Structuring the Unstructured
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {data.map((item, index) => (
            <motion.div
              className="bg-white rounded shadow-md hover:shadow-lg flex flex-col p-5 transition-all duration-300"
              key={index}
              variants={itemVariants}
              data-aos={
                index % 4 === 0
                  ? "fade-right"
                  : index % 4 === 3
                  ? "fade-left"
                  : index % 2 === 0
                  ? "fade-up"
                  : "fade-down"
              }
              data-aos-duration="800"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
            >
              <motion.div
                className="flex justify-center items-center h-16 mb-3"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                {item.node}
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <div className="text-sm text-gray-700 flex-1 mb-4">
                {item.content}
              </div>

              <div className="flex justify-center mt-auto">
                <Link
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.button
                    disabled={item.title === "D-Voice Detection"}
                    className="
                      bg-red-500 text-white px-6 py-2 
                      rounded-full text-sm font-medium
                      disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-400
                      transition-colors duration-300
                    "
                    initial="rest"
                    whileHover="hover"
                    variants={buttonVariants}
                  >
                    Know More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
