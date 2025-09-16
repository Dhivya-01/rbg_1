import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import { Upload, Users, Download, Activity, Calendar, Search, Clock, RotateCcw, Shield, BarChart3 } from "lucide-react"



const testimonials = [
  {
    text: "Upload and process multiple files at once without delays, making large-scale document handling effortless.",
    icon: "Upload",
    name: "Bulk Upload",
    role: "Save time, boost productivity",
  },
  {
    text: "Collaborate with your team using secure role-based permissions and shared dashboards.",
    icon: "Users",
    name: "Multi-User Access",
    role: "Built for teamwork",
  },
  {
    text: "Download structured results in Excel or JSON formats for easy reporting and system integration.",
    icon: "Download",
    name: "Excel & JSON Export",
    role: "Data ready your way",
  },
  {
    text: "Track preprocessing, transcription, extraction, and postprocessing in real time.",
    icon: "Activity",
    name: "Status Dashboard",
    role: "Full visibility, zero guesswork",
  },
  {
    text: "Filter and view uploads within specific time periods for accurate analysis and reporting.",
    icon: "Calendar",
    name: "Date Segmentation",
    role: "Organize with precision",
  },
  {
    text: "Quickly locate files using advanced search and filters, even in massive datasets.",
    icon: "Search",
    name: "File Search",
    role: "Find anything in seconds",
  },
  {
    text: "Every file is stored with Upload ID and timestamp for full traceability and compliance.",
    icon: "Clock",
    name: "Upload History",
    role: "Stay audit-ready",
  },
  {
    text: "Switch between projects instantly without logging out or breaking workflow.",
    icon: "RotateCcw",
    name: "Project Switching",
    role: "Flexibility that scales",
  },
  {
    text: "Securely reset passwords and manage user roles for controlled access.",
    icon: "Shield",
    name: "User Management",
    role: "Enterprise-grade security",
  },
  {
    text: "Get insights on automation, confidence levels, and human review activity.",
    icon: "BarChart3",
    name: "Analytics View",
    role: "Smarter decisions, faster",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 ">

      <div className="container  mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Features</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Features That Drive Results
          </h2>
          <p className="text-center mt-5 opacity-75">
            See the key features that drive accuracy and efficiency.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default  Testimonials ;