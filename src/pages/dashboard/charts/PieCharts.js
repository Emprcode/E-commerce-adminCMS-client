import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChartData = [
  {
    label: "Search Engines",
    SearchEngines: 40,
  },
  {
    label: "Direct Click",
    DirectClick: 30,
  },
  {
    label: "Bookmarks Click",
    BookmarksClick: 30,
  },
];
export const PieChart = () => {
  const [userData, setUserData] = useState({
    labels: PieChartData.map((data) => data.label),
    datasets: [
      {
        label: "Search Engines",
        data: PieChartData.map((data) => data.SearchEngines),
        backgroundColor: ["rgba(154, 85, 255, 1)"],
        borderColor: "black",
        borderWidth: 0,
      },
      {
        label: "Direct Click",
        data: PieChartData.map((data) => data.DirectClick),
        backgroundColor: ["rgba(254, 112, 150, 1)"],
        borderColor: "black",
        borderWidth: 0,
      },
      {
        label: "Bookmarks Click",
        data: PieChartData.map((data) => data.BookmarksClick),
        backgroundColor: ["rgba(54, 215, 232, 1)"],
        borderColor: "black",
        borderWidth: 0,
      },
    ],
  });
  return <Pie data={userData} />;
};
