import { useRef } from "react";
import { jsPDF } from "jspdf";
import "./Verticalbar.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Uso de parqueaderos",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function exportPDF(chartRef) {
  const doc = new jsPDF();
  doc.text("Estadísticas parqueadero Par-KUD", 10, 10);
  console.log(chartRef.current);
  let img = chartRef.current.toBase64Image();
  doc.addImage(img, "png", 10, 15, 190, 100);
  doc.save(`par-kud-${new Date().toString()}.pdf`);
}

function Verticalbar() {
  const chartRef = useRef(null);
  return (
    <div id="statistics-container">
      <Bar options={options} data={data} ref={chartRef} />
      <button
        id="export-pdf"
        onClick={() => {
          exportPDF(chartRef);
        }}
      >
        Exportar PDF
      </button>
    </div>
  );
}

export default Verticalbar;
