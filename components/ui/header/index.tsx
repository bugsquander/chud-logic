import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCoins,
  faUserGroup,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import Head from 'next/head';
import Register from './register';
import Online from './online';
import styles from '@/styles/header.module.css';
import Script from 'next/script';

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          CHUD LOGIC // Creating CONTENT about DRAMA, NEWS, POLITICS and RACISM
          on TWITCH and YOUTUBE.
        </title>
        <meta
          name="description"
          content="CHUD LOGIC // Creating CONTENT about DRAMA, NEWS, POLITICS and RACISM on TWITCH and YOUTUBE."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <span className={styles.logo}>
          <Online />
          <span className={styles.name}>
            <Link href="/" aria-label="Chud Logic" title="Chud Logic">
              <span className={styles.green}>Chud</span>
              <span className={styles.white}>Logic</span>
              <span className={styles.grey}>.</span>
              <span className={styles.greyer}>com</span>
            </Link>
          </span>
          <div className={styles.menu}>
            <div
              className={
                router.pathname == '/subscribe' ? 'active' : 'subscribe'
              }
            >
              <Link href="/subscribe" aria-label="Subscribe" title="Subscribe">
                <FontAwesomeIcon icon={faStar} className={styles.icon} />
                <span className={styles.title}>Subscribe</span>
              </Link>
            </div>
            <div className={router.pathname == '/donate' ? 'active' : 'donate'}>
              <Link href="/donate" aria-label="Donate" title="Donate">
                <FontAwesomeIcon icon={faCoins} className={styles.icon} />
                <span className={styles.title}>Donate</span>
              </Link>
            </div>
            <div
              className={
                router.pathname == '/community' ? 'active' : 'community'
              }
            >
              <Link href="/community" aria-label="Community" title="Community">
                <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
                <span className={styles.title}>Community</span>
              </Link>
            </div>
            <div className={router.pathname == '/videos' ? 'active' : 'videos'}>
              <Link href="/videos" aria-label="Videos" title="Videos">
                <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                <span className={styles.title}>videos</span>
              </Link>
            </div>
            <div className={router.pathname == '/stream' ? 'active' : 'stream'}>
              <Link href="/stream" aria-label="Stream" title="Stream">
                <FontAwesomeIcon icon={faVideo} className={styles.icon} />
                <span className={styles.title}>Stream</span>
              </Link>
            </div>{' '}
            <div
              className={router.pathname == '/schedule' ? 'active' : 'schedule'}
            >
              <Link href="/schedule" aria-label="Schedule" title="Schedule">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className={styles.icon}
                />
                <span className={styles.title}>Schedule</span>
              </Link>
            </div>
          </div>
        </span>
        <span className={styles.panel}>
          <Register />
        </span>
      </header>
    </>
  );
};

export default Header;
