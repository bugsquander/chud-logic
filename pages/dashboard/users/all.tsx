import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import AllUsers from '@/components/dashboard/users/all';
import data from "@/data/data.json";

const UsersAllPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faUsers} className="text-vomit-500 mr-1" />
        <span>All Users</span>
      </div>

        <AllUsers data={data as any} />
    </>
  );
};

UsersAllPage.getLayout = DashboardPageLayout;

export default UsersAllPage;
