import Navbar from "../../components/ui/Navbar";
import OrderManagementPage from "../components/OrderManagement";
export default function OrderManagement() {
  return (
    <div className="flex bg-gray-300/20">
      <Navbar />
      <div className="flex-1">
        <OrderManagementPage />
      </div>
    </div>
  );
}
