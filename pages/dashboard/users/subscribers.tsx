import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Subscribers from '@/components/dashboard/users/subscribers';

const UsersSubscribersPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faFaceSmile} className="text-vomit-500 mr-1" />
        <span>Subscribers</span>
      </div>

      <div>
        <Subscribers />
      </div>
    </>
  );
};

UsersSubscribersPage.getLayout = DashboardPageLayout;

export default UsersSubscribersPage;
