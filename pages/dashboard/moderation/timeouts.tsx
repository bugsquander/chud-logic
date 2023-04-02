import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Timeouts from '@/components/dashboard/moderation/timeouts';

const ModerationTimeOutsPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faFaceSmile} className="text-vomit-500 mr-1" />
        <span>Timeouts</span>
      </div>

      <div>
        <Timeouts />
      </div>
    </>
  );
};

ModerationTimeOutsPage.getLayout = DashboardPageLayout;

export default ModerationTimeOutsPage;
