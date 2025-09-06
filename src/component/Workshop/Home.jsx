/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Courses from "./Course";
import Expertise from "./Expertise";
import Hero from "./Hero";
import Registration from "./Registration";
import Prerequisite from "./Prerequisite";

export default function Home({ Workshop, Course }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero eventDetails={Workshop.eventDetails} />
      <Courses courseOverview={Workshop.courseOverview} />
      <Course />
      <Expertise expertTalks={Workshop.expertTalks} />
      {Workshop.Prerequisite?
      <Prerequisite Prerequisite={Workshop.Prerequisite} />:<></>}
      {Workshop.registration ? (
        <Registration registration={Workshop.registration} />
      ) : (
        <></>
      )}
    </div>
  );
}
