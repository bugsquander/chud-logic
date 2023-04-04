import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGroup,
  faLock,
  faScrewdriverWrench,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const DashboardMenu = () => {
  return (
    <>
      <nav className="border border-zinc-800 bg-black/20 p-5 rounded-lg w-full text-zinc-500 space-y-2.5">
        <dl>
          <dt className="text-2xl uppercase italic font-black">
            <span className="inline-block w-8">
              <FontAwesomeIcon
                icon={faUserGroup}
                className="text-vomit-500 mr-1 text-xl"
              />
            </span>
            <span className="text-white">Users</span>
          </dt>
          <dd>
            <Link
              href="/dashboard/users/all"
              className="ml-8 hover:text-zinc-400"
            >
              All Users
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/users/subscribers"
              className="ml-8 hover:text-zinc-400"
            >
              Subscribers
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/users/donators"
              className="ml-8 hover:text-zinc-400"
            >
              Donators
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/users/roles"
              className="ml-8 hover:text-zinc-400"
            >
              Roles
            </Link>
          </dd>
        </dl>
        <hr className="border-dashed border-zinc-700" />
        <dl>
          <dt className="text-2xl uppercase italic font-black list-image-[]">
            <span className="inline-block w-8">
              <FontAwesomeIcon icon={faLock} className="text-vomit-500 mr-1" />
            </span>
            <span className="text-white">Moderation</span>
          </dt>
          <dd>
            <Link
              href="/dashboard/moderation/bans"
              className="ml-8 hover:text-zinc-400"
            >
              Bans
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/moderation/timeouts"
              className="ml-8 hover:text-zinc-400"
            >
              Timeouts
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/moderation/filters"
              className="ml-8 hover:text-zinc-400"
            >
              Filters
            </Link>
          </dd>
        </dl>
        <hr className="border-dashed border-zinc-700" />
        <dl>
          <dt className="text-2xl uppercase italic font-black list-image-[]">
            <span className="inline-block w-8">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="text-vomit-500 mr-1"
              />
            </span>
            <span className="text-white">Features</span>
          </dt>
          <dd>
            <Link
              href="/dashboard/features/announcements"
              className="ml-8 hover:text-zinc-400"
            >
              Announcements
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/features/goals"
              className="ml-8 hover:text-zinc-400"
            >
              Goals
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/features/polls"
              className="ml-8 hover:text-zinc-400"
            >
              Polls
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/features/emotes"
              className="ml-8 hover:text-zinc-400"
            >
              Emotes
            </Link>
          </dd>
        </dl>
        <hr className="border-dashed border-zinc-700" />
        <dl>
          <dt className="text-2xl uppercase italic font-black list-image-[]">
            <span className="inline-block w-8">
              <FontAwesomeIcon
                icon={faChartPie}
                className="text-vomit-500 mr-1"
              />
            </span>
            <span className="text-white">Stats</span>
          </dt>
          <dd>
            <Link
              href="/dashboard/stats/viewers"
              className="ml-8 hover:text-zinc-400"
            >
              Viewers
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/stats/subscriptions"
              className="ml-8 hover:text-zinc-400"
            >
              Subscriptions
            </Link>
          </dd>
          <dd>
            <Link
              href="/dashboard/stats/donations"
              className="ml-8 hover:text-zinc-400"
            >
              Donations
            </Link>
          </dd>
        </dl>
      </nav>
    </>
  );
};
export default DashboardMenu;
