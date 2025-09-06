import { useContext, useEffect } from "react";
import Header from "../Header";
import Section from "./Section";
import Content from "./Content";
import { AboutContext } from "../Context/Context";
import Slider from "./Slider";
import Timeline from "./Timeline";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const data = {
    title: "AI ",
    content:
      "RBG AI is an Enterprise-class, AI-native Organization with a Purpose to Structure any Unstructured Data that Impacts the Business",
    button: "Reach Us",
  };

  const { members } = useContext(AboutContext);
  return (
    <div className="">
      <Header data={data} />
      <Timeline />
      {members.map((item, index) => (
        <Section key={index} data={item} />
      ))}

      <div className="max-w-7xl overflow-x-hidden mx-auto grid grid-cols-1 lg:grid-cols-3">
        <h1 className="col-span-3 text-center font-Poppins capitalize font-bold text-zinc-700 text-2xl md:text-5xl my-10">
          Experts & Practitioners
        </h1>
        <Content />
        <Slider />
      </div>
    </div>
  );
}
