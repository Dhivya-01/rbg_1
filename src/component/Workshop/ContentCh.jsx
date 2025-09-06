import "react-vertical-timeline-component/style.min.css";
import ml from "../../assests/images/ml.png";
import flowdiagram from "../../assests/images/LLM-Chennai-2.png";
export const WorkIcon = () => {
  return <img src={ml} alt="" />;
};
// import course from "../Workshop/CourseDetail";

const ContentCh = () => {
  // const data = course.course;
  return (
    // <div className="min-h-screen flex-col bg-Primary py-10 w-full max-w-full flex items-center sm:px-5 lg:px-20 md:px-10 justify-center">
    //   <h1 className="text-5xl text-zinc-700 font-bold mb-10 ">
    //     Course Content
    //   </h1>
    //   <div className="grid md:grid-cols-2 max-w-7xl ">
    //     {data.map((item, index) => (
    //       <div
    //         key={index}
    //         className="lg:px-20 px-10 font-Poppins bg-Secondary p-5 m-2 rounded shadow-md"
    //       >
    //         <h3 className="font-semibold  text-Primary text-2xl mb-5">
    //           Day
    //           <span className="text-zinc-700 mx-2">{item.day}</span>
    //           {item.title}
    //         </h3>
    //         <ul className="ml-10">
    //           {item.subtopics.map((topic, index) => (
    //             <li key={index} className="list-decimal">
    //               <h1 className="font-medium  text-zinc-700 text-lg mb-2">
    //                 {topic.title}
    //               </h1>
    //               <ul>
    //                 {topic.subtopics.map((item, index) => (
    //                   <li
    //                     className="ml-10  flex items-center font-medium  text-zinc-500 mb-2"
    //                     key={index}
    //                   >
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       fill="none"
    //                       viewBox="0 0 24 24"
    //                       strokeWidth={1.5}
    //                       stroke="currentColor"
    //                       className="w-4 h-4 mx-1"
    //                     >
    //                       <path
    //                         strokeLinecap="round"
    //                         strokeLinejoin="round"
    //                         d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    //                       />
    //                     </svg>

    //                     {item}
    //                   </li>
    //                 ))}
    //               </ul>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
      <h1 className="text-center py-10 text-5xl text-zinc-700 font-bold mb-10 ">
        Course Content
      </h1>
      <img
        className="max-w-7xl w-64 md:w-1/2 lg:w-[80rem] mx-auto"
        src={flowdiagram}
        alt=""
      />
    </div>
  );
};

export default ContentCh;
