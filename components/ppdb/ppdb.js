const Ppdb = () => {
  return (
    <div className="ppdb-wrapper h-100 ">
      <h2 className="text-center text-4xl text-white font-sans pt-80 pb-4 md:pt-60 md:pb-16">
        Pendaftaran Peserta Didik Baru
      </h2>
      <div className="grid grid-cols-3 gap-6 p-12">
        <button className="btn-ppdb">SD</button>
        <button className="btn-ppdb">SMP</button>
        <button className="btn-ppdb">SMA</button>
      </div>
      <div className="custom-shape-divider-top-1635135550">
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
export default Ppdb;
