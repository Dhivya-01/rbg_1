/* eslint-disable react/prop-types */
export default function Expertise({ expertTalks }) {
  return (
    <div className="w-full flex bg-gray-200 flex-col justify-center items-center min-h-[50vh] py-5">
      <h1 className="text-center capitalize font-Poppins font-bold text-xl md:text-4xl mb-10 text-zinc-700">
        {expertTalks.title}
      </h1>
      <div className="flex flex-col max-w-5xl mx-auto text-zinc-600 font-medium text-md px-5 md:text-lg">
        {expertTalks.content.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
