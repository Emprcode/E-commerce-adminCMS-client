import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChartData = [
    
    {
      label: "traffic-source",
      Australia: 40,
      USA: 30,
      Europe: 30,
    },
  ];
export const PieChart = () => {

    const [userData, setUserData] = useState({
        labels: PieChartData.map((data) => data.label),
        datasets: [
          {
            label: "Australia",
            data: PieChartData.map((data) => data.Australia),
            backgroundColor: ["rgba(154, 85, 255, 1)"],
            borderColor: "black",
            borderWidth: 0,
          },
          {
            label: "USA",
            data: PieChartData.map((data) => data.USA),
            backgroundColor: [ "rgba(254, 112, 150, 1)"],
            borderColor: "black",
            borderWidth: 0,
          },
          {
            label: "Europe",
            data: PieChartData.map((data) => data.Europe),
            backgroundColor: ["rgba(54, 215, 232, 1)"],
            borderColor: "black",
            borderWidth: 0,
          },
        ]
    });
  return <Pie data={userData} />;
}
