import { useEffect } from "react";
import Header from "../Header";
import Home from "./Hero";
import Workshop from "./Workshop";
import Training from "./Training";

export default function Research() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const data = {
    title: "AI Research",
    content:
      "Opensource initiatives to explore AI towards narrow to general intelligence",
    button: "Explore More",
  };
  return (
    <div>
      <Header data={data} />
      <Home />
      <Training />
      <Workshop />
    </div>
  );
}
