import Navbar from "../../components/ui/Navbar";
import HelpSupportPage from "../components/HelpSupport";
export default function Reports() {
  return (
    <div className="flex bg-gray-300/20">
      <Navbar />
      <div className="flex-1">
        <HelpSupportPage />
      </div>
    </div>
  );
}
