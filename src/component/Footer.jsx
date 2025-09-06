import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import { useInView } from "react-intersection-observer"; // For triggering animations on scroll
import { useState, useEffect } from "react";

// Custom ScrollToTopLink component with animation
const ScrollToTopLink = ({ to, children, className }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }} // Added for mobile feedback
    >
      <Link to={to} className={className} onClick={handleClick}>
        {children}
      </Link>
    </motion.div>
  );
};

// Animated social icon component
const AnimatedSocialIcon = ({ href, children, hoverColor }) => {
  return (
    <motion.a
      href={href}
      className={`cursor-pointer hover:${hoverColor} text-2xl md:text-3xl`}
      whileHover={{
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }} // Added for mobile feedback
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.a>
  );
};

// Animated list item component
const AnimatedListItem = ({ index, children }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="hover:scale-105 duration-300"
    >
      {children}
    </motion.li>
  );
};

export default function Footer() {
  const linkedln = "https://in.linkedin.com/company/rbgai";
  const youtube = "https://www.youtube.com/c/RBGAI";
  const github = "https://github.com/rbg-research";

  // External portal link
  const attendancePortal = "https://e-connect.rbg.ai/";

  const products = [
    { name: "MLloOps", path: "/MLloOps" },
    { name: "MLStack", path: "/MLStack" },
  ];

  const solutions = [
    { name: "DHVANI", path: "/Dhvani" },
    { name: "Deed Parser", path: "/DeedParser" },
    { name: "Know Voice", path: "/KnowVoice" },
    { name: "Captcha Solver", path: "/CaptchaSolver" },
    { name: "Form Extractor", path: "/FormExtractor" },
  ];

  const internalPortals = [
    { name: "E-Connect Portal", url: "https://e-connect.rbg.ai/" },
  ];

  // State for screen size
  const [isMobile, setIsMobile] = useState(false);

  // Detect if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Use intersection observer to trigger animations when footer is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Different animation variants for mobile and desktop
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2, // Faster stagger on mobile
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: isMobile ? 0.3 : 0.5 }, // Faster animations on mobile
    },
  };

  // Mobile-specific variants
  const mobileColumnVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5 },
    },
  };

  // Animated section for mobile accordion effect
  const AnimatedSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return isMobile ? (
      <motion.div className="border-b border-gray-200 py-3">
        <motion.div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-xl font-bold">{title}</h3>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </motion.div>
        <motion.div
          variants={mobileColumnVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      </motion.div>
    ) : (
      <motion.div className="space-y-4" variants={itemVariants}>
        <motion.h3
          className="text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>
        {children}
      </motion.div>
    );
  };

  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <motion.div
        className="px-5 md:px-20 py-5 mt-10 md:py-10 text-left max-w-7xl w-full mx-auto bg-gray-100 rounded flex flex-col space-y-10 font-Inter text-zinc-600"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Social Links Section with wave animation */}
        <motion.div
          className="flex items-start space-x-5 md:space-x-10 text-left text-lg font-Poppins md:text-2xl"
          variants={itemVariants}
        >
          <motion.span
            className="font-semibold text-zinc-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Follow us on
          </motion.span>
          <AnimatedSocialIcon href={github} hoverColor="text-green-600">
            <FaGithub />
          </AnimatedSocialIcon>
          <AnimatedSocialIcon href={linkedln} hoverColor="text-blue-700">
            <FaLinkedin />
          </AnimatedSocialIcon>
          <AnimatedSocialIcon href={youtube} hoverColor="text-red-600">
            <FaYoutube />
          </AnimatedSocialIcon>
        </motion.div>

        <motion.hr variants={itemVariants} />

        {/* Main content with responsive layout */}
        <motion.div
          className={
            isMobile
              ? "flex flex-col space-y-2"
              : "grid grid-cols-1 md:grid-cols-4 gap-8"
          }
          variants={itemVariants}
        >
          {/* More About Us Column */}
          {isMobile ? (
            <AnimatedSection title="More About Us">
              <div className="flex flex-col space-y-3 mt-3">
                <ScrollToTopLink className="hover:text-red-600" to="/">
                  Home
                </ScrollToTopLink>
                <ScrollToTopLink className="hover:text-red-600" to="research">
                  Research
                </ScrollToTopLink>
                <ScrollToTopLink className="hover:text-red-600" to="about">
                  About us
                </ScrollToTopLink>
                <ScrollToTopLink className="hover:text-red-600" to="contact">
                  Contact us
                </ScrollToTopLink>
                <ScrollToTopLink className="hover:text-red-600" to="gallery">
                  Gallery
                </ScrollToTopLink>
              </div>
            </AnimatedSection>
          ) : (
            <motion.div
              className="flex flex-col space-y-3"
              variants={itemVariants}
            >
              <motion.h3
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                More About Us
              </motion.h3>
              <ScrollToTopLink className="hover:text-red-600" to="/">
                Home
              </ScrollToTopLink>
              <ScrollToTopLink className="hover:text-red-600" to="research">
                Research
              </ScrollToTopLink>
              <ScrollToTopLink className="hover:text-red-600" to="about">
                About us
              </ScrollToTopLink>
              <ScrollToTopLink className="hover:text-red-600" to="contact">
                Contact us
              </ScrollToTopLink>
              <ScrollToTopLink className="hover:text-red-600" to="gallery">
                Gallery
              </ScrollToTopLink>
            </motion.div>
          )}

          {/* Products Column */}
          <AnimatedSection title="Products">
            <motion.ul className="space-y-2 mt-3">
              {products.map((product, index) => (
                <AnimatedListItem key={index} index={index}>
                  <ScrollToTopLink
                    to={product.path}
                    className="hover:text-green-600"
                  >
                    {product.icon}
                    <span>{product.name}</span>
                  </ScrollToTopLink>
                </AnimatedListItem>
              ))}
            </motion.ul>
          </AnimatedSection>

          {/* Solutions Column */}
          <AnimatedSection title="Solutions">
            <motion.ul className="space-y-2 mt-3">
              {solutions.map((solution, index) => (
                <AnimatedListItem key={index} index={index}>
                  <ScrollToTopLink
                    to={solution.path}
                    className="hover:text-blue-700"
                  >
                    {solution.icon}
                    <span>{solution.name}</span>
                  </ScrollToTopLink>
                </AnimatedListItem>
              ))}
            </motion.ul>
          </AnimatedSection>

          {/* Employee Portal Column */}
          <AnimatedSection title="Employee Portal">
            <motion.ul className="space-y-2 mt-3">
              {internalPortals.map((portal, index) => (
                <li
                  key={index}
                  className="hover:text-red-600 hover:scale-105 duration-300"
                >
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-red-600"
                  >
                    {portal.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </AnimatedSection>
        </motion.div>

        <motion.hr variants={itemVariants} />

        {/* Footer Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"
          variants={itemVariants}
        >
          <motion.div
            className="flex space-x-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} // Added for mobile feedback
          >
            <Link
              to="/"
              className="font-semibold hover:text-blue-700 duration-300"
            >
              RBG.AI
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-1 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-center">
              © 2021 - 2025 RBG.AI All rights reserved
            </p>
          </motion.div>

          <motion.div
            className={`flex ${isMobile ? "flex-col space-y-2" : "gap-4"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <ScrollToTopLink
              className="font-medium text-zinc-700 hover:text-blue-700"
              to="/policy"
            >
              Privacy Policy
            </ScrollToTopLink>
            <ScrollToTopLink
              className="font-medium text-zinc-700 hover:text-blue-700"
              to="/Terms"
            >
              Terms of Service
            </ScrollToTopLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
