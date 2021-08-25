import React from "react";
import Layout from "../components/Layout/layout";
import about1 from "../public/assets/about-1.jpg";

import Image from "next/image";

const About = () => {
  return (
    <Layout title="about">
      <div>
        <div className="z-1 w-full h-full absolute mt-5 md:mt-10">
          <div className="container mx-auto  px-4 flex flex-col">
            <h1 className="text-3xl md:text-5xl md:w-1/4 md:h-10 p-2 md:p-3 md:mr-10">
              History
            </h1>
            <p className=" w-full  md:w-1/2 md:h-10 p-2 md:p-3 md:mr-10 md:mt-10 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="inline-flex  ">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                History
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Visi
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Next
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            alt="about"
            // style={{ height: "500px" }}
            src="/assets/about-1.jpg"
            className="w-screen h-md md:h-screen"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
