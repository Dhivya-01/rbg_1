/* eslint-disable react/prop-types */
import { HomeContext } from "./Context";
import {
  FaEye,
  FaDatabase,
  FaPerson,
  FaPersonArrowUpFromLine,
  FaRobot,
  FaChartLine,
 
  FaRocket,

  FaBrain,
  FaNetworkWired,
  FaCloud,
} from "react-icons/fa6";
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
} from "../../assests/partners/index";
import {
  MdDiversity3,
  MdFoundation,
  MdTextFields,
  MdVoiceChat,
  MdWorkOff,
  MdWorkspaces,
  MdAnalytics,
  MdSecurity,
  MdSpeed,
  MdIntegrationInstructions,
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";
export default function HomeProvider({ children }) {
  // const style = { fontSize: "28px", margin: "auto", color: "#EF9A9A" };
  const style = { fontSize: "28px", color: "#EF9A9A" };
  const client = {
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
  };
  const section = [
    {
      title: "TextStack",
      heading: "Turn text into usable insights",
      content: [
        "Every review, message, or document carries meaning but finding it can be challenging. TextStack helps you make sense of language by turning unstructured words into clear, usable insights.",
        "From understanding customer feedback to summarizing reports or translating across languages, TextStack makes working with text simple and effective.",
      ],
      subcontent: [
        {
          title: "Classify Text with Ease",
          content:
            "Automatically group and label text based on tone, intent, or topic—no manual sorting needed.",
          img: <MdAnalytics style={style} />,
        },
        {
          title: "Extract What Matters",
          content:
            "Identify and capture key details such as names, keywords, or important data points hidden in documents.",
          img: <FaDatabase style={style} />,
        },
        {
          title: "Translate Seamlessly",
          content:
            "Break language barriers and communicate with confidence through natural, accurate translations.",
          img: <MdTextFields style={style} />,
        },
        {
          title: "Summarize in Seconds",
          content:
            "Convert long, detailed text into short, clear summaries that save time and highlight the essentials.",
          img: <FaChartLine style={style} />,
        },
      ],
    },
    {
      title: "VisionStack",
      heading: "Bring clarity to complex visuals",
      content: [
        "Images carry enormous amounts of information—from documents and tables to faces and objects. VisionStack gives you the power to extract, organize, and analyze that information automatically, turning visuals into data you can act on.",
        "Whether it’s scanning documents, detecting objects in real time, or segmenting images for detailed study, VisionStack brings clarity to complex visual content.",
        "VisionStack transforms raw visual input into structured, usable data. By automating visual analysis, it reduces manual effort, improves accuracy, and enables smarter decisions across industries.",
      ],
      subcontent: [
        {
          title: "Vision Transcriber",
          content:
            "Extract text and key information from visual content, improving accessibility and archiving.",
          img: <MdTextFields style={style} />,
        },
        {
          title: "Vision Classifier",
          content:
            "Automatically identify and categorize objects in images for fast, consistent recognition.",
          img: <MdAnalytics style={style} />,
        },
        {
          title: "Vision Segmenter",
          content:
            "Break down images into meaningful parts to enable fine-grained analysis.",
          img: <GiSkills style={style} />,
        },
        {
          title: "Vision Detector",
          content:
            "Recognize faces, objects, or items in real time for use in security, retail, and operations.",
          img: <FaEye style={style} />,
        },
        {
          title: "Table Extractor",
          content:
            "Convert tables from scanned documents or images into clean, digital formats ready for analysis.",
          img: <FaDatabase style={style} />,
        },
      ],
    },
    {
      title: "VoiceStack",
      heading: "Turn conversations into insights",
      content: [
        "Every conversation carries meaning but it’s easy to lose valuable insights in the noise. VoiceStack helps organizations capture, process, and understand voice data, turning spoken words into information you can use.",
        "From accurate transcription to natural speech generation, VoiceStack transforms audio into a resource for better communication, customer engagement, and smarter decision-making.",
      ],
      subcontent: [
        {
          title: "Voice Transcriber",
          content:
            "Convert spoken language into accurate text for records, analysis, and accessibility.",
          img: <MdVoiceChat style={style} />,
        },
        {
          title: "Voice Enhancer",
          content:
            "Clean up recordings by reducing background noise and improving clarity for professional quality audio.",
          img: <MdSpeed style={style} />,
        },
        {
          title: "Voice Recognition",
          content:
            "Identify speakers and detect voice patterns for security, personalization, and profiling.",
          img: <FaPerson style={style} />,
        },
        {
          title: "Voice Diarizer",
          content:
            "Differentiate and label individual speakers within group conversations for easier tracking and analysis.",
          img: <MdDiversity3 style={style} />,
        },
        {
          title: "Voice Classifier",
          content:
            "Analyze and categorize voices by mood, tone, or acoustic features to gain deeper context.",
          img: <MdAnalytics style={style} />,
        },
        {
          title: "Voice Synthesizer",
          content:
            "Generate natural, humanlike speech from text for interactive applications and accessibility tools.",
          img: <FaRobot style={style} />,
        },
      ],
    },
    {
      title: "MLoops Infrastructure",
      heading: "Enterprise-Grade AI Deployment Made Simple",
      content: [
        "MLloOps Infrastructure is the backbone of your AI journey designed to deploy,manage, and scale machine learning models with enterprise level reliability. Instead of worrying about servers, pipelines, or performance bottlenecks, your team can focus on building innovative AI solutions while MLloOps takes care of the rest.",
        "From seamless model deployment to intelligent monitoring, auto scaling, and automated DevOps, MLloOps ensures your AI works smoothly in production every time, at any scale.",
        "AI built for speed, intelligence, and real-world impact."
      ],
      subcontent: [
        {
          title: "One-Click Model Deployment",
          content:
            "Deploy AI models into production effortlessly with a streamlined pipeline that supports version control, rollback, and automated scaling. With just a single click, models can be securely launched into production environments, reducing complexity and accelerating time-to-value.",
          img: <FaRocket style={style} />,
        },
        {
          title: "Performance Monitoring Suite",
          content:
            "Our monitoring suite ensures complete visibility into model health by tracking accuracy, data drift, and performance in real time. Automated alerts allow teams to quickly identify issues and maintain reliable outcomes, ensuring models remain effective even as conditions evolve.",
          img: <MdSpeed style={style} />,
        },
        {
          title: "Auto-scaling Infrastructure",
          content:
            "MLloOps is built on cloud-native infrastructure that dynamically scales to meet changing demands. Whether workloads increase during peak activity or decrease during off-hours, the system automatically adjusts resources to ensure efficiency, performance, and cost-effectiveness.",
          img: <FaNetworkWired style={style} />,
        },
        {
          title: "DevOps Automation Tools",
          content:
            "The platform integrates intelligent automation for the entire CI/CD pipeline, streamlining development to deployment with minimal manual intervention. This enables faster iterations, smoother releases, and reliable AI operations across production environments.",
          img: <MdIntegrationInstructions style={style} />,
        },
      ],
    },
  ];

  const value = { section, client };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
