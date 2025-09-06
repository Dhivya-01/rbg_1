const courseContent = [
  {
    day: 1,
    title: "Foundations of Large Language Models",
    sessions: [
      {
        time: "Morning",
        topic: "Unveiling the Power of Language Models",
        subtopics: [
          "Overview of Natural Language Processing (NLP) and Its Diverse Applications",
          "Introduction to Language Models",
          "Demystifying Transformers and the Attention Mechanism",
        ],
      },
      {
        time: "Afternoon",
        topic: "Navigating the Landscape of Large Language Models",
        subtopics: [
          "Introduction to Popular LLMs (GPT, LLaMA, Mistral, etc.)",
          "Dive into Hugging Face: Your Gateway to Language Models",
          "Running a Large Language Model from your Laptop",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Mastering Prompt Engineering with OpenAI API",
    sessions: [
      {
        time: "Morning",
        topic: "Crafting the Perfect Prompt",
        subtopics: [
          "Art and Science of Prompt Engineering",
          "Exploring Different Types of Prompt",
          "Strategies for writing Impactful Prompts",
        ],
      },
      {
        time: "Afternoon",
        topic: "Harnessing the Power of OpenAI API and Langchain",
        subtopics: [
          "Introduction to OpenAI API: Your Key to Language Magic",
          "Unveiling Langchain: Bridging Prompt Engineering with OpenAI",
          "Transforming Concepts into Powerful Prompts",
        ],
      },
    ],
  },
  {
    day: 3,
    title: "Fine-Tuning for Precision: Open Source Language Models",
    sessions: [
      {
        time: "Morning",
        topic: "Open Source Language Models Unveiled",
        subtopics: [
          "Navigating the Open Source Landscape",
          "Consuming Language Models from Hugging Face",
          "Data Preparation Mastery",
        ],
      },
      {
        time: "Afternoon",
        topic: "The Art of Fine-Tuning",
        subtopics: [
          "Deep Dive into Fine-Tuning Language Models",
          "Guiding Principles of Parameter-Efficient Fine-Tuning (PEFT)",
          "Crafting Your Refined Language Model",
        ],
      },
    ],
  },
  {
    day: 4,
    title: "Building Intelligent Applications with Large Language Models",
    sessions: [
      {
        time: "Morning",
        topic: "Transforming Ideas into Applications",
        subtopics: [
          "Application Development Primer with Language Models",
          "Introduction to FastAPI and Streamlit for Rapid Prototyping",
          "Building Your Application with a Language Model",
        ],
      },
      {
        time: "Afternoon",
        topic: "Advancing with RAG Framework and Vector Databases",
        subtopics: [
          "Exploring Retrieval-Augmented Generation (RAG) Framework",
          "Introduction to Vector Databases for Enhanced Efficiency",
          "Crafting an Intelligent Document Chat Application",
        ],
      },
    ],
  },
  {
    day: 5,
    title: "Navigating LLMOps and Capstone Project",
    sessions: [
      {
        time: "Morning",
        topic: "Journey into LLMOps and Ethical Considerations",
        subtopics: [
          "Introduction to LLMOps: Managing and Scaling Language Models",
          "Deployment Strategies for Your Language Model",
          "Unpacking Ethical Implications and Best Practices",
        ],
      },
      {
        time: "Afternoon",
        topic: "Culminating in a Capstone Project",
        subtopics: [
          "Synthesizing Knowledge in a Capstone Project",
          "Project Presentations and Peer Feedback",
          "Closing Remarks and Certification Ceremony",
        ],
      },
    ],
  },
];

const course = [
  {
    day: 1,
    title: "LLM Fundamentals",
    subtopics: [
      {
        title: "Language Models",
        subtopics: [],
      },
      { title: "NLP/NLR/NLG", subtopics: [] },

      { title: "Transformers", subtopics: [] },
      { title: "Auto Encoders and Auto Rep", subtopics: [] },
    ],
  },

  {
    day: 2,
    title: "LLM Exploration",
    subtopics: [
      {
        title: "OpenAI LLM",
        subtopics: [],
      },
      {
        title: "Open Source LLMs",
        subtopics: [],
      },
      {
        title: "Prompt Engineering",
        subtopics: ["Instruct", "Chat"],
      },
      {
        title: "LLM Inference",
        subtopics: ["Quantization", "deployment"],
      },
    ],
  },
  {
    day: 3,
    title: "RAG & Advanced RAG",
    subtopics: [
      {
        title: "Embeddings",
        subtopics: [],
      },
      {
        title: "Constructions & Retrievers",
        subtopics: ["Vector DB"],
      },
      {
        title: "Memory",
        subtopics: ["Vector DB"],
      },
      {
        title: "Agents",
        subtopics: [],
      },
    ],
  },
  {
    day: 4,
    title: "Capstone with LLM in Production",
    subtopics: [
      {
        title: "Deployment",
        subtopics: ["Local", "Server", "Demo"],
      },
      {
        title: "Securing LLM",
        subtopics: [],
      },
      {
        title: "Qualitative Analysis",
        subtopics: [],
      },
    ],
  },
];



const courseContent2 = [
  {
    title: "Introduction to Generative AI",
    day: 1,
    sessions: [
      {
        topic: "Why AI?",
        type: "Theory",
      },
      {
        topic: "AI vs Machine Learning vs Deep Learning vs Generative AI",
        type: "Theory",
      },
      {
        topic: "Generative AI at Industries",
        type: "Theory",
      },
      {
        topic: "Text-Vision-Voice-Data Analytics",
        type: "Theory",
      },
      {
        topic: "Data Representation - Text, Vision and Voice",
        type: "Practical",
      },
      {
        topic: "Features & Its Representation",
        type: "Practical",
      },
      {
        topic: "Data/Features as Matrix",
        type: "Practical",
      },
      {
        topic: "Labels/Classes",
        type: "Practical",
      },
      {
        topic: "Regression to Neural Networks",
        type: "Practical",
      },
      {
        topic: "Neural Networks to Generative AI",
        type: "Practical",
      },
    ],
  },
  {
    title: "All you want is Transfer Learning",
    day: 2,
    sessions: [
      {
        topic: "Transformers & Foundation Models",
        type: "Theory with Practical",
      },
      {
        topic: "Text Analytics with Transfer Learning",
        type: "Theory with Practical and Discussion",
        subtopics: [
          "LLaMA & Mistral",
          "Text Classification",
          "Text Extraction",
          "Text Summarization",
        ],
      },
      {
        topic: "Vision Analytics with Transfer Learning",
        type: "Theory with Practical and Discussion",
        subtopics: [
          "SEEM",
          "Image Classification",
          "Segmentation",
          "Object Detection",
        ],
      },
      {
        topic: "Voice Analytics with Transfer Learning",
        type: "Theory with Practical and Discussion",
        subtopics: [
          "Whisper & SeamlessM4T",
          "Speech Classification",
          "Speech to Text",
          "Speech to Speech",
        ],
      },
      {
        topic: "Parameter Efficient Fine Tuning",
        type: "Theory with Practical and Discussion",
      },
      {
        topic: "Version Control Capstone Projects with Git",
        type: "Practical with Discussion",
      },
    ],
  },
  // {
  //   title: "Prerequisite",
  //   day: 3,
  //   sessions: [
  //     {
  //       topic: "Python Basics",
  //       type: "Discussion",
  //       link: "https://github.com/rbg-research/AI-Training/tree/main/python/Introduction",
  //     },
  //     {
  //       topic: "Numpy Basics",
  //       type: "Discussion",
  //       link: "https://github.com/rbg-research/AI-Training/tree/main/python/NumPy",
  //     },
  //     {
  //       topic: "Pandas",
  //       type: "Discussion",
  //       link: "https://github.com/rbg-research/AI-Training/tree/main/python/Pandas",
  //     },
  //     {
  //       topic: "Matplotlib Basics",
  //       type: "Discussion",
  //       link: "https://github.com/rbg-research/AI-Training/tree/main/python/Matplotlib",
  //     },
  //   ],
  // },
  // {
  //   title: "Instructors",
  //   day: 4,
  //   sessions: [
  //     {
  //       topic:
  //         "Pioneering Artificial Intelligence technologists with more than a decade of experience",
  //       type: "Capstone",
  //       subtopics: [
  //         "Implementing AI-enabled technologies and enterprise systems",
  //         "Core mathematicians",
  //         "Experience in AI-powered digital transformation",
  //         "Technologies: NLP, Bioinformatics, Computer Vision, Transfer-Reinforcement-Imitation Learning, Cyber Security, Text Mining, Data Science, Speech Processing",
  //       ],
  //     },
  //   ],
  // },
];

const Details = { courseContent, course, courseContent2 };
export default Details;
