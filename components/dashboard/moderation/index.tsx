import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const DashboardModeration = () => {
  return (
    <>
      <div>
        <span className="inline-block w-8">
        <FontAwesomeIcon icon={faLock} className="text-vomit-500 mr-1" />
        </span>
        <span className="text-white">Moderation</span>
      </div>
    </>
  );
};
export default DashboardModeration;
