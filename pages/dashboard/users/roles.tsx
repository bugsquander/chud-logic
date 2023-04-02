import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Roles from '@/components/dashboard/users/roles';

const UsersRolesPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faFaceSmile} className="text-vomit-500 mr-1" />
        <span>Roles</span>
      </div>

      <div>
        <Roles />
      </div>
    </>
  );
};

UsersRolesPage.getLayout = DashboardPageLayout;

export default UsersRolesPage;
