import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Polls from '@/components/dashboard/features/polls';

const FeaturesPollsPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faFaceSmile} className="text-vomit-500 mr-1" />
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
