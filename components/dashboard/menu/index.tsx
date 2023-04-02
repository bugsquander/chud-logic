import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faLock,
  faFaceSmile,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const DashboardMenu = () => {
  return (
    <>
      <nav className="border border-zinc-800 bg-black/20 p-5 rounded-md w-full text-zinc-400 space-y-2.5">
        <dl>
          <dt className="text-2xl uppercase italic font-black">
            <span className="inline-block w-8">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-vomit-500 mr-1 text-xl"
              />
            </span>
            <span className="text-white">Users</span>
          </dt>
          <dd className="ml-8"><Link href="/dashboard/users/all">All Users</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/users/subscribers">Subscribers</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/users/donators">Donators</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/users/roles">Roles</Link></dd>
        </dl>
        <hr className="border-dashed border-zinc-700" />
        <dl>
          <dt className="text-2xl uppercase italic font-black list-image-[]">
            <span className="inline-block w-8">
              <FontAwesomeIcon icon={faLock} className="text-vomit-500 mr-1" />
            </span>
            <span className="text-white">Moderation</span>
          </dt>
          <dd className="ml-8"><Link href="/dashboard/moderation/bans">Bans</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/moderation/timeouts">Timeouts</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/moderation/filters">Filters</Link></dd>
        </dl>
        <hr className="border-dashed border-zinc-700" />
        <dl>
          <dt className="text-2xl uppercase italic font-black list-image-[]">
            <span className="inline-block w-8">
              <FontAwesomeIcon
                icon={faFaceSmile}
                className="text-vomit-500 mr-1"
              />
            </span>
            <span className="text-white">Features</span>
          </dt>
          <dd className="ml-8"><Link href="/dashboard/features/announcements">Announcements</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/features/goals">Goals</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/features/polls">Polls</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/features/emotes">Emotes</Link></dd>
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
          <dd className="ml-8"><Link href="/dashboard/stats/viewers">Viewers</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/stats/subscriptions">Subscriptions</Link></dd>
          <dd className="ml-8"><Link href="/dashboard/stats/donations">Donations</Link></dd>
        </dl>
      </nav>
    </>
  );
};
export default DashboardMenu;
