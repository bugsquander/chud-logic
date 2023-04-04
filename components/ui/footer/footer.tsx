import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitch,
  faYoutube,
  faTwitter,
  faDiscord,
  faRedditAlien,
  faPatreon
} from '@fortawesome/free-brands-svg-icons';
import { faClipboardList, faSkull } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="p-5 border-t border-zinc-800 bg-black/20 uppercase italic font-black">
      <div className="flex items-center justify-end text-3xl pb-1.5 space-x-2 shadow-black">
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-vomit-100 via-vomit-500 to-vomit-900">
          Chud
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
          Nation
        </span>
        <span>
          <Link
            href="https://www.twitch.tv/chudlogic"
            aria-label="Twitch"
            title="Twitch"
          >
            <FontAwesomeIcon
              icon={faTwitch}
              className="text-[#6441a5] hover:text-vomit-500 transition duration-1000"
            />
          </Link>
        </span>
        <span>
          <Link
            href="https://www.youtube.com/@ChudLogic"
            aria-label="YouTube"
            title="YouTube"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-[#c4302b] hover:text-vomit-500 transition duration-1000"
            />
          </Link>
        </span>
        <span>
          <Link
            href="https://twitter.com/IrrationalChad"
            aria-label="Twitter"
            title="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-[#00acee] hover:text-vomit-500 transition duration-1000"
            />
          </Link>
        </span>
        <span>
          <Link
            href="https://discord.gg/z72fPaKy3P"
            aria-label="Discord"
            title="Discord"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              className="text-[#5865f2] hover:text-vomit-500 transition duration-1000"
            />
          </Link>
        </span>
        <span>
          <Link
            href="https://www.reddit.com/r/chudlogic/"
            aria-label="Reddit"
            title="Reddit"
          >
            <FontAwesomeIcon
              icon={faRedditAlien}
              className="text-[#ff5700] hover:text-vomit-500 transition duration-1000"
            />
          </Link>
        </span>
        <span>
          <Link
            href="https://www.patreon.com/chudlogic/"
            aria-label="Patreon"
            title="Patreon"
          >
            <FontAwesomeIcon
              icon={faPatreon}
              className="text-[#FF424D] hover:text-vomit-500 transition duration-1000"
            />
          </Link>
        </span>
      </div>
      <div className="text-xs flex items-center justify-end font-normal text-zinc-400 space-x-2 text-shadow shadow-black tracking-wide">
        <span>
          <Link
            href="/terms"
            aria-label="Terms"
            title="Terms"
            className="hover:text-zinc-300"
          >
            <FontAwesomeIcon icon={faClipboardList} className="mr-1" />
            <span>Terms & Conditions</span>
          </Link>
        </span>
        <span>
          <Link
            href="/terms"
            aria-label="Bastards"
            title="Bastards"
            className="hover:text-zinc-300"
          >
            <FontAwesomeIcon icon={faSkull} className="mr-1" />
            <span>Site maintained by horrible bastards</span>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
