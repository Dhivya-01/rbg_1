/* eslint-disable react/prop-types */
export default function Section({ data }) {
  return data ? (
    <>
      <h1 className="text-center font-Poppins capitalize font-bold text-zinc-700 text-2xl md:text-5xl py-10 my-10 transition-all duration-500 hover:text-zinc-900 hover:scale-105">
        {data.title}
      </h1>

      <div className="max-w-7xl mx-auto grid-cols-1 md:grid-cols-3 grid my-10 gap-10">
        {data.data.map((item, index) => (
          <div
            key={index}
            className="font-Poppins flex flex-col text-center p-6 rounded-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:bg-zinc-50"
          >
            <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4 shadow-md transition-transform duration-500 hover:scale-110">
              <img
                src={item.img}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                alt={item.name}
              />
            </div>
            <h1 className="text-md md:text-xl font-semibold transition-colors duration-300 hover:text-indigo-600">
              {item.name}
            </h1>
            <p className="text-sm md:text-lg text-zinc-500 transition-colors duration-300 hover:text-zinc-700">
              {item.role}
            </p>
          </div>
        ))}
      </div>
      {data.content.length > 0 ? (
        <p className="md:text-lg text-center py-5 rounded mb-10 text-zinc-500 transition-colors duration-300 hover:text-zinc-700 font-Poppins max-w-7xl mx-auto px-5 md:px-10">
          {data.content}
        </p>
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  );
}
