import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/header.module.css";

const Online = () => {
  return (
    <Link
      href="/stream"
      className={styles.status}
      aria-label="Chud Logic"
      title="Chud Logic // STREAMING LIVE ON TWITCH.TV"
    >
      <div className={styles.avatar}>
        <Image
          src="/cl-logo-web.png"
          alt="Chud Logic"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.current}>
        <div className={styles.live}>LIVE</div>{" "}
      </div>
    </Link>
  );
};

export default Online;
