import Head from "next/head";
import GlobalDivison from "../components/divisionOfSubject/divisionOfSubject";
import FeaturedProgramList from "../components/featuredProgram/FeaturedProgramList";
import Footer from "../components/Footer/footer";
import Layout from "../components/Layout/layout";
import Navbar from "../components/Navbar/navbar";
import Ppdb from "../components/ppdb/ppdb";
import UniversityTable from "../components/universityTable/universityTable";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="mb-10 greetingBackground h-115">
        <Navbar textColor="white" />

        {/* <div className="blur"></div> */}
        {/* <div className="blur"> */}
        <h1 className="text-3xl p-24 text-white">
          Hello
          <br />
          Welcome to Ulun Nuha Islamic School
        </h1>
        {/* </div> */}
        <div className="custom-shape-divider-bottom-1635767512">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-center text-4xl font-sans">Program Unggulan</h2>
        <FeaturedProgramList />
      </div>
      <div className="mt-24">
        <div>
          <UniversityTable />
        </div>
        <div>
          <h2 className="text-center text-4xl font-sans">
            Pembagian Mata Pelajaran
          </h2>
          <GlobalDivison />
        </div>
        <div className="mt-24">
          <Ppdb />
        </div>
      </div>
    </Layout>
  );
}
