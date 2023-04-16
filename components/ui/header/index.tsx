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
      <header className="bg-black/20 flex justify-between items-center p-5 text-2xl sm:text-[2.5rem] uppercase italic font-black text-shadow border-b border-zinc-800">
        <div className="grid grid-cols-5 gap-2">
          <div className="grid-rows-1">
            <Online />
          </div>
          <div className="grid-rows-3 col-span-4">
            <div className="leading-none tracking-wider flex justify-center -mt-0.5 mb-0.5">
                <Link href="/" aria-label="Chud Logic" title="Chud Logic">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-vomit-100 via-vomit-500 to-vomit-900">Chud</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">Logic</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-800">.</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 via-zinc-700 to-zinc-900">com</span>
                </Link>
            </div>
            <div className="text-[0.6rem] sm:text-[1.1rem] leading-none tracking-wider space-y-1 shadow-black">
              <div className="flex justify-center space-x-2">
                <span
                  className={
                    router.pathname == '/subscribe'
                      ? 'underline underline-offset-4 decoration-vomit-500'
                      : 'subscribe'
                  }
                >
                  <Link
                    href="/subscribe"
                    aria-label="Subscribe"
                    title="Subscribe"
                  >
                    <FontAwesomeIcon icon={faStar} className="text-vomit-500" />
                    <span className="hover:underline hover:underline-offset-4 decoration-vomit-500">
                      Subscribe
                    </span>
                  </Link>
                </span>
                <span
                  className={
                    router.pathname == '/donate'
                      ? 'underline underline-offset-4 decoration-vomit-500'
                      : 'donate'
                  }
                >
                  <Link href="/donate" aria-label="Donate" title="Donate">
                    <FontAwesomeIcon
                      icon={faCoins}
                      className="text-vomit-500 mr-0.5"
                    />
                    <span className="hover:underline hover:underline-offset-4 decoration-vomit-500">
                      Donate
                    </span>
                  </Link>
                </span>
                <span
                  className={
                    router.pathname == '/community'
                      ? 'underline underline-offset-4 decoration-vomit-500'
                      : 'community'
                  }
                >
                  <Link
                    href="/community"
                    aria-label="Community"
                    title="Community"
                  >
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className="text-vomit-500 mr-0.5"
                    />
                    <span className="hover:underline hover:underline-offset-4 decoration-vomit-500">
                      Community
                    </span>
                  </Link>
                </span>
              </div>
              <div className="flex justify-center space-x-2">
                <span
                  className={
                    router.pathname == '/videos'
                      ? 'underline underline-offset-4 decoration-vomit-500'
                      : 'videos'
                  }
                >
                  <Link href="/videos" aria-label="Videos" title="Videos">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-vomit-500 mr-0.5"
                    />
                    <span className="hover:underline hover:underline-offset-4 decoration-vomit-500">
                      videos
                    </span>
                  </Link>
                </span>
                <span
                  className={
                    router.pathname == '/stream'
                      ? 'underline underline-offset-4 decoration-vomit-500'
                      : 'stream'
                  }
                >
                  <Link href="/stream" aria-label="Stream" title="Stream">
                    <FontAwesomeIcon
                      icon={faVideo}
                      className="text-vomit-500 mr-0.5"
                    />
                    <span className="hover:underline hover:underline-offset-4 decoration-vomit-500">
                      Stream
                    </span>
                  </Link>
                </span>
                <span
                  className={
                    router.pathname == '/schedule'
                      ? 'underline underline-offset-4 decoration-vomit-500'
                      : 'schedule'
                  }
                >
                  <Link href="/schedule" aria-label="Schedule" title="Schedule">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="text-vomit-500 mr-1"
                    />
                    <span className="hover:underline hover:underline-offset-4 decoration-vomit-500">
                      Schedule
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        
          <Register />
      </header>
    </>
  );
};

export default Header;
