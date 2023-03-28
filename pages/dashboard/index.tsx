import styles from "./dashboard.module.css";
import Announcements from "../announcements";
import Emotes from "../emotes";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
        <div className={styles.announcements}>
          <Link
            href="/announcements"
            className={styles.title}
            aria-label="Chud Logic // Announcements"
            title="Chud Logic // Announcements"
          >
            <div className={styles.link}>Announcements</div>
          </Link>
          <Announcements />
        </div>
        <div className={styles.emotes}>
          <Link
            href="/emotes"
            className={styles.title}
            aria-label="Chud Logic // Emotes"
            title="Chud Logic // Emotes"
          >
            <div className={styles.link}>Emotes</div>
          </Link>
          <Emotes />
        </div>
    </>
  );
};

export default Dashboard;
