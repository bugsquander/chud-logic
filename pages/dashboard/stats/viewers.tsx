import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import ViewersStats from '@/components/dashboard/stats/viewers';

const StatsViewersPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faUsersViewfinder} className="text-vomit-500 mr-1" />
        <span>Viewers Stats</span>
      </div>

      <div>
        <ViewersStats />
      </div>
    </>
  );
};

StatsViewersPage.getLayout = DashboardPageLayout;

export default StatsViewersPage;
