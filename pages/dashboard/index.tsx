import Announcements from "../announcements";
import Emotes from "../emotes";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
        <div className="mb-5">
          <Link
            href="/announcements"
            aria-label="Chud Logic // Announcements"
            title="Chud Logic // Announcements"
          >
            <div>Announcements</div>
          </Link>
          <Announcements />
        </div>
        <div>
          <Link
            href="/emotes"
            aria-label="Chud Logic // Emotes"
            title="Chud Logic // Emotes"
          >
            <div>Emotes</div>
          </Link>
          <Emotes />
        </div>
    </>
  );
};

export default Dashboard;
