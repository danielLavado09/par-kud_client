import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import ReservationsByMonthChart from "./ReservationsByMonthChart";
import TopParkingsByReservations from "./TopParkingsByReservationsChart";

function ParkingsStatistics() {
  const statisticsRef = useRef(null);

  const exportPDF = async () => {
    const container = statisticsRef.current;

    if (container) {
      try {
        const canvas = await html2canvas(container, {
          scale: 2, // Escala el contenido para mejorar la calidad del PDF
          logging: false, // Deshabilita los registros de consola de html2canvas
          scrollX: 0, // Desplazamiento horizontal inicial
          scrollY: 0, // Desplazamiento vertical inicial
          windowHeight: document.documentElement.scrollHeight, // Altura de la página completa
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait", // Orientación del PDF (retrato)
          unit: "px", // Unidad de medida (píxeles)
          format: "a4", // Tamaño de página (A4)
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("informe-parqueaderos.pdf");
      } catch (error) {
        console.error("Error al generar PDF:", error);
      }
    }
  };

  return (
    <>
      <div ref={statisticsRef}>
        <h3>Reservas por mes</h3>
        <ReservationsByMonthChart />
        <h3 className="mt-5">Top 5 parqueaderos con más reservas</h3>
        <TopParkingsByReservations />
      </div>
      <Button variant="outline-dark" onClick={exportPDF}>
        Exportar PDF
      </Button>
    </>
  );
}

export default ParkingsStatistics;
