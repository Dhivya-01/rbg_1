/* eslint-disable react/prop-types */
import { AboutContext } from "./Context";
import { advisory, research, practitioner, Executives } from "../About/members";

export default function AboutProvider({ children }) {
  const members = [
    {
      title: "Advisory Board",
      data: advisory,
      content:
        "A formidable alliance of industry titans, each wielding over 30 years of unparalleled expertise, seamlessly united with technology visionaries boasting three decades of groundbreaking research. Together, they form an unparalleled force, steering our endeavors with a wealth of knowledge, insight, and foresight at the dynamic nexus of industry and technology.",
    },
    {
      title: "Executives",
      data: Executives,
      content: "",
    },
    {
      title: "Research Executives",
      data: research,
      content: "",
    },

    // { title: "members", data: members },
  ];
  const Practitioner = {
    title: "practitioner",
    data: practitioner,
    content: "",
  };

  const value = { members, Practitioner };
  return (
    <AboutContext.Provider value={value}>{children}</AboutContext.Provider>
  );
}
