import React, { useState } from "react";
import Layout from "../components/Layout/layout";
// import about1 from "/assets/about-1.jpg";

import Image from "next/image";
import Navbar from "../components/Navbar/navbar";

const About = () => {
  const [slide, setSlide] = useState("history");
  const historyText = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industrys standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with the release of Letraset sheets
  containing Lorem Ipsum passages, and more recently with desktop
  publishing software like Aldus PageMaker including versions of
  Lorem Ipsum.`;
  const visiText = `It is a long established fact that a reader will be distracted by
  the readable content of a page when looking at its layout. The
  point of using Lorem Ipsum is that it has a more-or-less normal
  distribution of letters, as opposed to using 'Content here,
  content here', making it look like readable English. Many desktop
  publishing packages and web page editors now use Lorem Ipsum as
  their default model text, and a search for 'lorem ipsum' will
  uncover many web sites still in their infancy. Various versions
  have evolved over the years, sometimes by accident, sometimes on
  purpose (injected humour and the like).`;
  return (
    <Layout title="about">
      <div>
        <Navbar textColor="black" />
        <div className="z-1 w-full h-full absolute mt-5 md:mt-10">
          <div className="container mx-auto  px-4 flex flex-col">
            <h1 className="text-3xl md:text-5xl md:w-1/4 md:h-10 p-2 md:p-3 md:mr-10">
              {slide == "history" ? "History" : "Visi"}
            </h1>
            <p className=" w-full  md:w-1/2 md:h-10 p-2 md:p-3 md:mr-10 md:mt-4 ">
              {slide == "history" ? historyText : visiText}
            </p>
            <div className="inline-flex  ">
              <button
                onClick={() => setSlide("history")}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              >
                History
              </button>
              <button
                onClick={() => setSlide("visi")}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              >
                Visi
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            alt="about"
            src={
              slide == "history" ? "/assets/about-1.jpg" : "/assets/about-2.jpg"
            }
            className="w-screen h-md md:h-screen"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
