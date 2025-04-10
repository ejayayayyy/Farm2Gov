import Navbar from "../../components/ui/Navbar";
import MarketPage from "../components/Market";

export default function Market() {
  return (
    <div className="flex bg-gray-300/20">
      <Navbar />
      <div className="flex-1">
        <MarketPage />
      </div>
    </div>
  );
}
