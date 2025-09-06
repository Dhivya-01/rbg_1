/* eslint-disable react/prop-types */

const Prerequisite = ({ Prerequisite }) => {
  return (
    <div className="font-Poppins px-5 min-h-3.5 max-w-7xl mx-auto space-y-5 md:space-y-10 py-20 text-center ">
      <h1 className="text-xl md:text-5xl font-bold text-zinc-700">
        {Prerequisite.title}
      </h1>
      <ul className="mx-auto max-w-lg grid grid-cols-1 sm:gap-5 sm:grid-cols-2">
        {Prerequisite.subtopic.map((item, index) => (
          <li className="flex flex-col p-10 rounded shadow-lg" key={index}>
            <span className="font-medium text-2xl text-zinc-700">
              {item.topic}
            </span>
            {item.link ? (
              <a
                href={item.link}
                className="font-medium mt-5 text-Primary text-blue-500  rounded"
              >
                Explore
              </a>
            ) : (
              <></>
            )}

            <ul>
              {item.subtopics &&
                item.subtopics.map((item, index) => (
                  <li className="list-decimal mx-5 text-zinc-500" key={index}>
                    {item}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prerequisite;
