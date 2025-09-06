/* eslint-disable react/prop-types */
export default function Course({ courseOverview }) {
  return (
    <div className="min-h-[70vh] flex-col bg-gray-200 w-full max-w-full flex items-center sm:px-5 lg:px-20 md:px-10 justify-center py-5">
      <h1 className="text-5xl text-center text-zinc-600 font-bold mb-5">
        {courseOverview.title}
      </h1>
      <p className="text-md p-5 bg-gray-100 text-zinc-500   w-full md:max-w-7xl bg-Secondary shadow font-medium font-Poppins">
        {courseOverview.content}
      </p>
      <div className="font-Poppins grid md:grid-cols-2  lg:grid-cols-3 gap-5 mt-10">
        {courseOverview.sections &&
          courseOverview.sections.map((item, index) => (
            <div
              key={index}
              className="flex flex-col shadow  p-5 md:shadow-lg bg-white rounded"
            >
              <h1 className="text-xl  font-bold text-zinc-700">{item.title}</h1>
              <ul className="flex justify-center flex-col  font-medium mt-5 text-gray-600">
                {item.options.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
