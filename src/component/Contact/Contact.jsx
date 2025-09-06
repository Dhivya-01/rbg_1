import { useEffect, useState } from "react";
import { FaDirections } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WorldMap } from "./WorldMap";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [alert, setAlert] = useState(false);

  const address = [
    {
      place: "Coimbatore",
      name: "SREC Spark Incubation Foundation",
      location: "AIDC-1 ",
      address:
        "Sri Ramakrishna Engineering College, Coimbatore, Tamil Nadu 641022, IN.",
      direction:
        "https://www.bing.com/maps?osid=3ff44d05-5746-41ec-a03a-0459c9e165ed&cp=11.060858~76.944651&lvl=13.32&pi=0&imgid=fed65f40-8ac6-4624-84b6-1b5216585a90&v=2&sV=2&form=S00027",
    },
    {
      place: "Coimbatore",
      name: "CODISSIA Defence Innovation and Atal Incubation Centre (CDIIC)",
      location: "AIDC-2",
      address: "Coimbatore, Tamil Nadu 641018, IN.",
      direction:
        "https://www.bing.com/maps?osid=0d713132-c141-4799-911d-ec57634cd090&cp=11.00462~76.969421&lvl=16&pi=0&imgid=e7b7c834-f0e5-487f-a3ee-82ccc6fb5de9&v=2&sV=2&form=S00027",
    },
    {
      place: "Coimbatore",
      name: "Amrita's Innovation and Incubation Centre",
      location: "AIDC-3",
      address:
        "Amritanagar, Ettimadai, CIR Building, Coimbatore, Tamil Nadu 641112, IN.",
      direction:
        "https://www.bing.com/maps?osid=a2c00aa8-da48-44f9-bd55-ab114bc9059e&cp=11.001355~76.962597&lvl=16&pi=0&imgid=a6736469-886d-4928-9776-6cbf9036f3de&v=2&sV=2&form=S00027",
    },
    {
      place: "Coimbatore",
      name: "Forge Innovation & Ventures",
      location: "AIDC-4",
      address:
        "KCT Tech Park, Saravanampatty, Coimbatore, Tamil Nadu 641049, IN.",
      direction:
        "https://www.bing.com/maps?osid=4cbe2795-5a05-46dd-aa06-47dbf9bc7a55&cp=11.308381~77.691879&lvl=11&pi=0&v=2&sV=2&form=S00027",
    },
  ];

  const handleCopyToClipboard = () => {
    const email = "contact@rbg.ai";

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
      })
      .catch((err) => {});
  };

  return (
    <div className="md:px-20 py-5 px-5 max-w-7xl mx-auto flex flex-col items-start space-y-12 text-left font-Inter text-zinc-600">
      <h1 className="text-2xl md:text-4xl text-zinc-800 mt-10 md:mt-20">
        Hey! What can we do for you today? Feel free to let us know, and we'll
        be happy to help!
      </h1>

      <p className="text-base md:text-xl">
        Have any specific requirement or need to structure any unstructured data
        using MLStack? We have you taken care of. Contact us via the following
        email address.
      </p>

      <button
        onClick={handleCopyToClipboard}
        className="relative bg-blue-500 text-white py-2 px-4 rounded"
      >
        contact@rbg.ai
        {alert ? (
          <p className="absolute text-left top-full left-0 w-[15rem] text-red-400">
            Text copied to Clipboard!🫡
          </p>
        ) : (
          <></>
        )}
      </button>

      {/* Add the world map component here */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4 text-zinc-800">
          Our Global Presence
        </h2>
        <WorldMap />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 font-medium font-Poppins text-md md:text-lg">
        {address.map((item, index) => (
          <div key={index} className="text-left rounded p-4 ">
            <h1 className="font-semibold text-zinc-800 text-2xl">
              {item.place}-<span className="font-semibold ">{item.name}</span>
            </h1>
            <h3 className="font-medium text-zinc-500 ">{item.location}</h3>
            <span className=" font-light">
              {item.name}, {item.address}
            </span>
            <br />
            <Link
              className="flex items-center gap-2 text-blue-600 py-2 "
              to={item.direction}
            >
              <FaDirections />
              Get Direction
            </Link>
          </div>
        ))}
      </div>

      <div className="space-y-5 text-zinc-800 border-2 p-5 rounded">
        <h1 className="text-4xl font-semibold font-Poppins">
          Registered Address
        </h1>
        <h2 className="text-2xl text-zinc-600 font-medium font-Poppins">
          Resilience Business Grids LLP
        </h2>
        <p className="text-zinc-600 font-light font-Poppins text-xl">
          C/O H. D. Usha H.H Balakrishnan, D. NO. 57, T.R.S, Vijayalakshmi Park,
          Karamadai, Coimbatore, Tamil Nadu, 641104, India
          <br />
          <span className="mr-5 font-medium ">GST# 33ABDFR5937P1ZM</span>
          <span className="ml-5 font-medium ">LLP# AAY-1911</span>
        </p>
      </div>
    </div>
  );
}
