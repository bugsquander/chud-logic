import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import Announcements from '@/pages/announcements';

const FeaturesAnnouncementsPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faBullhorn} className="text-vomit-500 mr-1" />
        <span>Announcements</span>
      </div>

      <div>
        <Announcements />
      </div>
    </>
  );
};

FeaturesAnnouncementsPage.getLayout = DashboardPageLayout;

export default FeaturesAnnouncementsPage;
