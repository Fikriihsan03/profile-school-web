import React from "react";
import Layout from "../components/Layout/layout";
import Navbar from "../components/Navbar/navbar";

const Contact = () => {
  return (
    <Layout title="Contact">
      <Navbar textColor="black" />
      <div className="mb-8">
        <h1 className="mx-auto my-0 text-center p-8 w-4/5">
          Silahkan Contact Kami Jika Anda Memiliki Pertanyaan Atau Saran Seputar
          Sekolah Ini, Kami Dengan Senang Hati Menjawab Pertanyaan Dan
          Mempertimbangkan Saran Yang Anda Berikan
        </h1>
        <form>
          <div className="container mx-auto  px-4 flex flex-col md:items-center space-y-8 md:space-y-6">
            <input
              type="text"
              placeholder="Nama Anda"
              className="border-2 border-grey-900 rounded-md md:shadow-md w-3/5 md:w-1/4 md:h-10 p-2 md:p-3 md:mr-80 md:ml-4 "
            />
            <input
              type="Email"
              placeholder="Email Anda"
              className="border-2 border-grey-900 rounded-md md:shadow-md w-3/5 md:w-1/4 md:h-10 p-2 md:p-3 md:mr-80 md:ml-4"
            />
            <textarea
              placeholder="your message"
              className="w-11/12 h-48 border-2 border-grey-900 p-2 rounded md:w-1/2 md:h-48  "
            />
            <input
              type="submit"
              value="submit"
              className="transition duration-500 ease-in-out bg-green-600  transform hover:-translate-y-1 hover:scale-110 text-white text-center border-2 border-grey-900 rounded-md  w-1/4 p-2 md:w-24 md:h-10 "
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
