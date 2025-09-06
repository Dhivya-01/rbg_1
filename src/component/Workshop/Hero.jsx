/* eslint-disable react/prop-types */
export default function Hero({ eventDetails }) {
  return (
    <div className="font-Inter flex-col w-full max-w-full flex items-center  mb-5">
      <div className="p-10 w-full rounded text-center">
        <h1 className=" font-bold text-5xl my-10 text-zinc-700">
          {eventDetails.mainContent.title}
        </h1>
        <p className="text-xl font-medium px-5 font-Poppins text-zinc-700">
          {eventDetails.mainContent.subtitle}
        </p>
      </div>

      <span className="font-Poppins font-bold text-3xl text-zinc-700  my-10">
        {eventDetails.datesAndVenue.title}
      </span>
      <p className="text-md flex flex-col mb-5 text-center font-medium text-zinc-500">
        {eventDetails.datesAndVenue.content.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
    </div>
  );
}
