import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Filters from '@/components/dashboard/moderation/filters';

const ModerationFiltersPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faFaceSmile} className="text-vomit-500 mr-1" />
        <span>Filters</span>
      </div>

      <div>
        <Filters />
      </div>
    </>
  );
};

ModerationFiltersPage.getLayout = DashboardPageLayout;

export default ModerationFiltersPage;
