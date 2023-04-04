import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import Bans from '@/components/dashboard/moderation/bans';

const ModerationBansPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faBan} className="text-vomit-500 mr-1" />
        <span>Bans</span>
      </div>

      <div>
        <Bans />
      </div>
    </>
  );
};

ModerationBansPage.getLayout = DashboardPageLayout;

export default ModerationBansPage;
