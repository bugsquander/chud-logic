import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const DashboardStats = () => {
  return (
    <>
      <div>
        <span className="inline-block w-8">
          <FontAwesomeIcon icon={faChartPie} className="text-vomit-500 mr-1" />
        </span>
        <span className="text-white">Stats</span>
      </div>
    </>
  );
};
export default DashboardStats;
