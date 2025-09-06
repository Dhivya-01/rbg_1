import React, { useState, useEffect, useRef } from "react";

const ContinuousCardSlider = ({ data }) => {
  if (!data || !data.length) return null;

  const [cards, setCards] = useState([...data, ...data]);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workshopDetails, setWorkshopDetails] = useState({});

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get dynamic card width based on screen size
  const getCardWidth = () => {
    if (typeof window === "undefined") return 320;
    const width = window.innerWidth;
    if (width < 380) return 260; // smaller phones
    if (width < 640) return 280; // regular phones
    if (width < 768) return 300; // larger phones/small tablets
    return 320; // desktop
  };

  // Automatic scrolling for desktop only
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer || isPaused || isMobile) return;

    const animate = () => {
      const scrollAmount = 1;
      scrollContainer.scrollLeft += scrollAmount;

      // Reset scroll position when reaching end
      if (
        scrollContainer.scrollLeft >=
        (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2
      ) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(animate, 20);
    return () => clearInterval(intervalId);
  }, [isPaused, isMobile]);

  // Workshop details mapping based on venue and date
  const getWorkshopDetails = (venue, date) => {
    // This is a simplification - you would need to match the actual workshop details
    // from your document to the correct card

    // Extract just the month and year from the date for easier matching
    const simplifiedDate = date.toLowerCase();

    // Define workshop details mapping with complete content
    const detailsMap = {
      // Matching Amrita University April 2022
      "amrita university,ettimadai coimbatore-20 & 21, april 2022": {
        topic: "AI Essentials and Fundamentals",
        description:
          "The \"AI Essentials and Fundamentals\" workshop at Amrita University offered a comprehensive introduction to Artificial Intelligence, covering its core concepts and foundational techniques. Students were exposed to various AI models, machine learning algorithms, and the mathematics behind them. The focus was on understanding how AI can be applied to solve complex problems, with practical examples drawn from industry use cases. The goal was to build a strong foundation, enabling participants to grasp the real-world impact of AI. The event also highlighted the potential of AI in different sectors, including healthcare, finance, and manufacturing. RBG.ai's involvement reflected its deep commitment to democratizing AI technologies by providing practical insights and helping students navigate the growing demand for AI talent. The session paved the way for further advanced courses, offering participants the tools to dive deeper into AI development, in alignment with RBG.ai's focus on creating scalable, AI-driven business solutions.",
      },
      // SREC January 2024
      "srec spark incubation foundation,srec campus,coimbatore, tamil nadu.-january 08 - 12, 2024":
        {
          topic: "AI Essentials and Fundamentals",
          description:
            "This session at SREC SPARK served as an ideal starting point for individuals interested in entering the AI field. Participants gained an understanding of the fundamentals of machine learning, including supervised learning, unsupervised learning, and the basics of neural networks. The practical sessions provided a hands-on experience in building AI models, demonstrating how AI can be leveraged to solve real-world challenges across industries like healthcare, retail, and logistics. RBG.ai, with its expertise in machine learning stack development and ML Ops, played an instrumental role in the event by helping participants understand how to deploy and scale machine learning solutions effectively. This session aligned with RBG.ai's broader vision of empowering businesses with AI solutions that automate and streamline operations, turning complex data into actionable insights.",
        },
      // SREC February 2024
      "srec spark incubation foundation,srec campus,coimbatore, tamil nadu.-febrauary 23 - 24, 2024":
        {
          topic: "Generative AI from Essential AI",
          description:
            "Generative AI is one of the most transformative fields in artificial intelligence, and this workshop provided an in-depth exploration of its capabilities. Participants learned about Generative Adversarial Networks (GANs), transformers, and their applications in creative industries such as content creation, art generation, and product design. With a blend of theory and practice, the workshop also focused on how generative models can be fine-tuned and optimized for specific applications. RBG.ai's focus on Generative AI models and AI-powered automation in real-world use cases directly influenced this workshop's content. The event showcased how RBG.ai's AI stack facilitates the seamless integration of Generative AI into business workflows, such as document parsing, chatbots, and multimedia generation. This event was an ideal opportunity for participants to gain a competitive edge in an area that is rapidly reshaping industries globally.",
        },
      // St Joseph's March 2024
      "st joseph's college of engineering, omr, semmancheri, chennai, tamil nadu 600119.-march 04 - 07, 2024":
        {
          topic: "LLM Unleashed",
          description:
            "\"LLM Unleashed\" at St Joseph's College was an advanced exploration into the mechanics and applications of Large Language Models (LLMs). The event covered the intricacies of transformer models like GPT-3, BERT, and their capabilities in various NLP tasks such as language translation, sentiment analysis, and question-answering. The workshop also tackled important topics like model fine-tuning, ethical considerations, and mitigating biases in large AI systems. For RBG.ai, the focus on scalable LLM solutions mirrors our efforts to create cutting-edge NLP applications in specialized domains. The workshop demonstrates how large models can be customized for specific needs, including military and industry-specific parlance. This event helped participants understand the broader potential of LLMs, from education to enterprise, resonating with RBG.ai's mission to integrate secure and reliable NLP solutions across various sectors.",
        },
      // SREC September 2024
      "srec campus, coimbatore-17 to 19, september 2024": {
        topic: "AI in Biomedical",
        description:
          'The "AI in Biomedical" workshop is designed to introduce participants to the transformative role of Artificial Intelligence in the field of healthcare and biomedical sciences. The session explores how machine learning, deep learning, and computer vision are revolutionizing diagnostics, personalized medicine, drug discovery, and patient care. Participants will gain hands-on exposure to AI tools and frameworks used in biomedical data analysis, including applications like disease prediction, image-based diagnostics (MRI, CT scans), and genomics. RBG.ai\'s commitment to applying AI for societal impact is reflected in the biomedical innovations discussed during this workshop. By building scalable AI solutions for medical imaging analysis, electronic health record (EHR) parsing, and predictive analytics, RBG.ai showcases how AI can accelerate research and improve healthcare outcomes. This event is an opportunity for students and professionals to understand how ethical, accurate, and efficient AI systems are becoming critical pillars of modern healthcare ecosystems.',
      },
      // Amrita October 2024
      "amrita university,ettimadai coimbatore-18, october 2024": {
        topic: "Jailbreaking LLM",
        description:
          "The LLM workshop at Amrita University focused on understanding the vulnerabilities of Large Language Models (LLMs) and the ethical challenges associated with their use. Participants learned how to identify and mitigate risks such as adversarial attacks, prompt injection, and model biases. The session also explored responsible AI deployment strategies to ensure models are both effective and safe for real-world applications. RBG.ai's emphasis on secure AI solutions aligns directly with this workshop's themes. As we work on mission-critical projects, we understand the importance of safeguarding AI models from vulnerabilities, ensuring that they are secure, resilient, and free from manipulation. This session helped participants gain insights into how RBG.ai is advancing AI security and building models that meet rigorous cybersecurity standards.",
      },
      // SREC March 2025
      "srec campus, coimbatore-18, march 2025": {
        topic: "Generative AI Course on Chatbots with Text Analytics",
        description:
          "This specialized Gen AI course to SREC students, will teach participants how to design and develop intelligent chatbots integrated with text analytics capabilities. The course will cover the basics of conversational AI, natural language processing (NLP), and how to use text analytics to gain insights from human-machine interactions. Participants will also explore how to fine-tune chatbots to meet specific business needs, improving user experience and operational efficiency. RBG.ai's focus on AI-powered chatbots and automated document parsing is reflected in this course. We specialize in building custom AI solutions that allow businesses to automate customer service, support, and sales processes. This course offers participants the knowledge to build and deploy sophisticated conversational agents, directly aligning with RBG.ai's mission to provide intelligent automation to enterprises across industries.",
      },
      // St Joseph's April 2025
      "st joseph's college of engineering, omr, semmancheri, chennai, tamil nadu 600119.-01 to 07, april 2025":
        {
          topic: "Generative AI Workshop for ADS Students",
          description:
            "This advanced Generative AI workshop for ADS students will focus on creating cutting-edge AI solutions across multiple modalities — text, image, video, and audio. Participants will learn about generative models like GANs, VAEs, and transformers, along with prompt engineering and multimodal integration techniques. The goal is to equip students with the skills to leverage generative models in various applications such as media creation, product design, and more. RBG.ai's work in Generative AI is embedded in our approach to developing multimodal AI systems that integrate seamlessly into business operations. From intelligent content generation to AI-driven customer interactions, RBG.ai demonstrates how these technologies can be leveraged to create smarter, more efficient systems. This workshop provides students with the tools to explore the future of AI, in line with RBG.ai's innovative approach to transforming industries with generative technologies.",
        },
    };

    // Create a key by combining venue and date
    const key = `${venue.toLowerCase()}-${date.toLowerCase()}`;
    return (
      detailsMap[key] || {
        topic: "Workshop Details",
        description: "Details for this workshop will be available soon.",
      }
    );
  };

  const handleCardClick = (item) => {
    // Get the details for this specific workshop
    const details = getWorkshopDetails(item.venue, item.Date);
    setWorkshopDetails({
      ...item,
      ...details,
    });
    setSelectedCard(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <div
          ref={containerRef}
          className={`flex gap-4 md:gap-6 overflow-x-auto scroll-smooth
            ${isMobile ? "snap-x snap-mandatory" : "overflow-x-hidden"}
            ${
              isMobile ? "px-4 -mx-4" : ""
            } // Add padding on mobile for better UX
            scrollbar-hide`} // Hide scrollbar but keep functionality
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
            WebkitOverflowScrolling: "touch", // iOS smooth scrolling
          }}
          onMouseEnter={() => !isMobile && setIsPaused(true)}
          onMouseLeave={() => !isMobile && setIsPaused(false)}
        >
          {cards.map((item, index) => (
            <div
              key={`${item.venue}-${index}`}
              className={`flex-shrink-0 transition-all duration-300 
                ${isMobile ? "snap-center" : ""}`}
              style={{ width: `${getCardWidth()}px` }}
            >
              <div
                className={`h-full bg-white rounded-xl p-4 md:p-6 transform transition-all duration-300 
                ${
                  !isMobile
                    ? "hover:shadow-xl hover:-translate-y-2"
                    : "active:scale-95"
                }
                border border-gray-200`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1 space-y-3 md:space-y-4">
                    <div>
                      <h3 className="text-gray-600 text-sm sm:text-base mb-1">
                        Venue
                      </h3>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base whitespace-normal break-words leading-relaxed">
                        {item.venue}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gray-600 text-sm sm:text-base mb-1">
                        Date
                      </h3>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        {item.Date}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center py-6 md:py-8">
                    <img
                      src={item.img}
                      alt={item.venue}
                      className="w-3/4 max-h-[120px] md:max-h-[150px] object-contain transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-3 md:mt-4">
                    <button
                      disabled={item.disable}
                      onClick={() => !item.disable && handleCardClick(item)}
                      className="w-full bg-red-500 px-4 md:px-6 py-2.5 md:py-3 rounded-lg text-white font-medium
                        transform transition-all duration-300
                        active:bg-red-600 md:hover:bg-red-600 
                        active:scale-95 md:hover:shadow-lg
                        disabled:opacity-50 disabled:cursor-not-allowed
                        text-sm sm:text-base"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add scroll indicators for mobile */}
        {isMobile && (
          <div className="flex justify-center gap-1 mt-4">
            {data.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
            ))}
          </div>
        )}
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {workshopDetails.topic}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  About This Workshop
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {workshopDetails.description}
                </p>

                {selectedCard?.disable && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-yellow-800">
                      This workshop is not yet open for registration. Please
                      check back later.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-4 md:p-6 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg mr-3 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContinuousCardSlider;
