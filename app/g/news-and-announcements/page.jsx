import Navbar from "../../components/ui/Navbar";
import NewsAnnouncementsPage from "../components/NewsAnnouncements";

export default function NewsAnnouncements() {
  return (
    <div className="flex bg-gray-300/20">
      <Navbar />
      <div className="flex-1">
        <NewsAnnouncementsPage />
      </div>
    </div>
  );
}
