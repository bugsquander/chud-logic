import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import AllUsers from '@/components/dashboard/users/all';

const UsersAllPage = ({  }) => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faFaceSmile} className="text-vomit-500 mr-1" />
        <span>All Users</span>
      </div>

      <div>
        <AllUsers />
      </div>
    </>
  );
};

UsersAllPage.getLayout = DashboardPageLayout;

export default UsersAllPage;
