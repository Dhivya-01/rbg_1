import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Section({ item, index }) {
  const { title, heading, content, subcontent } = item;
  const navigate = useNavigate();
  const isEven = index % 2 === 0;

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Animation variants for content cards
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

  const handleCTAClick = () => {
    if (title && title.toLowerCase().includes("stack")) {
      navigate(`/MLStack?stack=${encodeURIComponent(title)}`);
    } else {
      // Default to MLoops product page or demo
      navigate("/MLloOps");
    }
  };

  return (
    <div className={`py-16 ${isEven ? "bg-white" : "bg-gradient-to-br from-gray-50 to-white"}`} ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Product Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            MLoops Product
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700">{heading}</h3>
          <div className="max-w-4xl mx-auto">
            {content.map((para, i) => (
              <p key={i} className="mb-6 text-gray-600 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          
          {/* Primary CTA Button */}
          <div className="mt-10">
            <button
              onClick={handleCTAClick}
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2"
            >
              <span>Explore {title}</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {subcontent.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex justify-start items-center h-16 mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">
                  {item.img}
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">{item.content}</p>
                
                {/* Feature CTA */}
                {/* <button
                  onClick={handleCTAClick}
                  className="text-red-600 font-semibold text-sm hover:text-red-700 transition-colors duration-300 inline-flex items-center gap-2 group-hover:gap-3"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Secondary CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-3xl p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using MLoops to accelerate their AI initiatives and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCTAClick}
                className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Start  Trial
              </button>
              <Link
  to="/Contact"
  className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300"
>
Schedule Demo
</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
