import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitch,
  faYoutube,
  faTwitter,
  faDiscord,
  faRedditAlien,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faClipboardList,
  faSkull,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <span className={styles.nation}>
          <span className={styles.green}>Chud</span>
          <span className={styles.white}>Nation</span>
        </span>
        <span className={styles.twitch}>
          <Link
            href="https://www.twitch.tv/chudlogic"
            aria-label="Twitch"
            title="Twitch"
          >
            <FontAwesomeIcon icon={faTwitch} />
          </Link>
        </span>
        <span className={styles.youtube}>
          <Link
            href="https://www.youtube.com/@ChudLogic"
            aria-label="YouTube"
            title="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </span>
        <span className={styles.twitter}>
          <Link
            href="https://twitter.com/IrrationalChad"
            aria-label="Twitter"
            title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </span>
        <span className={styles.discord}>
          <Link
            href="https://discord.gg/z72fPaKy3P"
            aria-label="Discord"
            title="Discord"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </Link>
        </span>
        <span className={styles.reddit}>
          <Link
            href="https://www.reddit.com/r/chudlogic/"
            aria-label="Reddit"
            title="Reddit"
          >
            <FontAwesomeIcon icon={faRedditAlien} />
          </Link>
        </span>
        <span className={styles.patreon}>
          <Link
            href="https://www.patreon.com/chudlogic/"
            aria-label="Patreon"
            title="Patreon"
          >
            <FontAwesomeIcon icon={faPatreon} />
          </Link>
        </span>
      </div>
      <div className={styles.appendix}>
        <span className={styles.contact}>
          <Link href="/contact" aria-label="Contact" title="Contact">
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className={styles.title}>Contact</span>
          </Link>
        </span>
        <span className={styles.terms}>
          <Link href="/terms" aria-label="Terms" title="Terms">
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faClipboardList} />
            </span>
            <span className={styles.title}>Terms & Privacy</span>
          </Link>
        </span>
        <span className={styles.site}>
          <Link href="/terms" aria-label="site" title="site">
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faSkull} />
            </span>
            <span className={styles.site}>
              Site maintained by horrible people
            </span>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
