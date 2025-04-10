import Navbar from "../../components/ui/Navbar";
import LogisticsDeliveryPage from "../components/LogisticsDelivery";

export default function LogisticsDelivery() {
  return (
    <div className="flex bg-gray-300/20">
      <Navbar />
      <div className="flex-1">
        <LogisticsDeliveryPage />
      </div>
    </div>
  );
}
