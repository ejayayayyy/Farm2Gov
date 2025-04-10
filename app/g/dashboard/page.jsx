import Navbar from "../../components/ui/Navbar";
import DashboardPage from "../components/Dashboard";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-300/20">
      <Navbar />
      <div className="flex-1">
        <DashboardPage />
      </div>
    </div>
  );
}
