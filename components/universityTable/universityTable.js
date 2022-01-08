import universityData from "./content";

const UniversityTable = () => {
  return (
    <div className="mb-10 university-table-wrapper ">
      <h2 className="text-center text-4xl text-white font-sans pt-16">
        Lulusan SMA Ulun Nuha diterima di universitas berikut
      </h2>
      {/* <div className="mr-6"> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-32 p-16">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_North_Sumatra_University.svg/1200px-Logo_of_North_Sumatra_University.svg.png"
          alt="logo"
          className="w-56 h-56 "
        />
        <img
          src="https://1.bp.blogspot.com/-XmXCsUuWt3o/WUqTe3EzNLI/AAAAAAAAAZ8/sGBC3B4sSNgm2TYWtUJivfHx2PWOnBuWACEwYBhgL/s1600/LOGO-UNIMED.png"
          alt="logo"
          className="w-56 h-56 "
        />{" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/id/1/15/Logolipia.png"
          alt="logo"
          className="w-56 h-56"
        />
        <img
          src="https://phpbego.files.wordpress.com/2015/10/logo-uinsu2.png"
          alt="logo"
          className="w-56 h-56"
        />
      </div>
      {/* </div> */}
      <div className="custom-shape-divider-bottom-1635135306">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default UniversityTable;
