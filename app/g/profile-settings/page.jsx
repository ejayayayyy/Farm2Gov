import Navbar from "../../components/ui/Navbar";
import ProfileSettingsPage from "../components/ProfileSettings";

export default function ProfileSettings() {
  return (
    <div className="flex bg-gray-300/20">
      <Navbar />
      <div className="flex-1">
        <ProfileSettingsPage />
      </div>
    </div>
  );
}
