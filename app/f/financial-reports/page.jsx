import Navbar from "../../components/ui/Navbar";
import ReportsPage from "../components/FinancialReports";
export default function Reports() {
  return (
    <div className="flex bg-gray-300/20">
      <Navbar />
      <div className="flex-1">
        <ReportsPage />
      </div>
    </div>
  );
}
