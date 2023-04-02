import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const DashboardUsers = () => {
  return (
    <>
      <div>
        <span className="inline-block w-8">
        <FontAwesomeIcon
                icon={faUsers}
                className="text-vomit-500 mr-1 text-xl"
              />
        </span>
        <span className="text-white">Users</span>
      </div>
    </>
  );
};
export default DashboardUsers;
