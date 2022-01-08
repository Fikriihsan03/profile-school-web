import React from "react";
import Image from "next/image";
import schoolLogo from "../../public/assets/logo-sekolah.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-2 bg-gray-800 pt-6 md:pt-12">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
            {/* <div className="footer-info lg:w-1/3 md:px-4">
              <h4 className="text-white text-2xl mb-4">deskripsi</h4>
              <p className="text-gray-400">subdeskripsi</p>
              <div className="mt-4">
                <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                  <span className="fab fa-facebook-f mr-2"></span> Instagram
                </button>
                <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                  <span className="fab fa-twitter mr-2"></span> Follow
                  @freeweb19
                </button>
              </div>
            </div> */}

            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-base font-medium text-white uppercase mb-2">
                    school address
                  </h6>
                  <div>
                    <a
                      href="https://goo.gl/maps/BwZK7nkj9EaPTdcM9"
                      className="text-gray-400 py-1 block hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SMA
                    </a>
                    <a
                      href="https://goo.gl/maps/ayqhbLo5ch5y7sD78"
                      className="text-gray-400 py-1 block hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SMP
                    </a>
                    <a
                      href="https://goo.gl/maps/L6qRnqZ9z2FV5xFN6"
                      className="text-gray-400 py-1 block hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SD
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
              <h5 className="text-lg text-white font-medium mb-4">
                Sekolah Islam Ulun Nuha
              </h5>
              <button className="bg-transparent text-white  rounded py-2 px-6 md:px-12 transition-colors duration-300">
                <Image src={schoolLogo} alt="logo sekolah" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center md:text-left">
                <p className="text-white">
                  &copy; <strong>Yayasan Minhajus Sunnah</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
