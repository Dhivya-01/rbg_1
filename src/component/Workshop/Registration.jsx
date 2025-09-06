/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import pdf from "../../assests/LLM.pdf";
export default function Registration({ registration }) {
  const handleDownload = () => {
    const pdfLink = pdf;
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfLink;
    downloadLink.download = "LLM.pdf";

    downloadLink.click();
  };
  return (
    <div className="min-h-[50vh] font-Poppins flex-col  bg-Secondary w-full max-w-full flex items-center sm:px-5 lg:px-20 md:px-10 py-5 justify-center">
      <h1 className="font-Poppins font-bold text-5xl mb-10 text-zinc-700">
        {registration.title}
      </h1>
      <div className="flex flex-col shadow-lg p-10 px-20 rounded">
        {registration.content.contactDetails.map((item, index) => (
          <p key={index} className="font-bold text-xl text-zinc-500 ">
            {item.label}
            <span className="text-lg mx-2 font-medium text-gray-500 ">
              {item.value}
            </span>
          </p>
        ))}

        <Link
          disabled={registration.content.registrationButton.disabled}
          to={registration.content.registrationButton.link}
          className="my-5 text-center text-blue-100 bg-blue-600 px-4 py-2 rounded shadow"
        >
          {registration.content.registrationButton.text}
        </Link>
        {registration.download ? (
          <button onClick={handleDownload}>Download</button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
