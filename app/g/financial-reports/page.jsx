import Navbar from "../../components/ui/Navbar";
import FinancialReportsPage from "../components/FinancialReports";
export default function Reports() {
  return (
    <div className="flex bg-gray-300/20">
      <Navbar />
      <div className="flex-1">
        <FinancialReportsPage />
      </div>
    </div>
  );
}
