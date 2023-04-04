import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import Donators from '@/components/dashboard/users/donators';

const UsersDonatorsPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faCoins} className="text-vomit-500 mr-1" />
        <span>Donators</span>
      </div>

      <div>
        <Donators />
      </div>
    </>
  );
};

UsersDonatorsPage.getLayout = DashboardPageLayout;

export default UsersDonatorsPage;
