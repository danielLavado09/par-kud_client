import ReservationsByMonthChart from "./ReservationsByMonthChart";
import TopParkingsByReservations from "./TopParkingsByReservationsChart";

function ParkingsStatistics() {
  return (
    <div>
      <ReservationsByMonthChart />
      <TopParkingsByReservations />
    </div>
  );
}

export default ParkingsStatistics;
