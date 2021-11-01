import { Doughnut } from "react-chartjs-2";

const globalData = {
  labels: ["Mapel Agama", "Mapel Umum"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};

const GlobalDivison = () => {
  return (
    <>
      <div style={{ height: "500px" }}>
        <Doughnut data={globalData} options={{ maintainAspectRatio: false }} />
      </div>
      <div></div>
    </>
  );
};
export default GlobalDivison;
