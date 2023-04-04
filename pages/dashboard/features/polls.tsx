import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import Polls from '@/components/dashboard/features/polls';

const FeaturesPollsPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faSquarePollVertical} className="text-vomit-500 mr-1" />
        <span>Polls</span>
      </div>

      <div>
        <Polls />
      </div>
    </>
  );
};

FeaturesPollsPage.getLayout = DashboardPageLayout;

export default FeaturesPollsPage;
