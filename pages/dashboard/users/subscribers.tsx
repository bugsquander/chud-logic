import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Subscribers from '@/components/dashboard/users/subscribers';
import data from "@/data/data.json";

const UsersSubscribersPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faStar} className="text-vomit-500 mr-1" />
        <span>Subscribers</span>
      </div>

        <Subscribers data={data as any} />
    </>
  );
};

UsersSubscribersPage.getLayout = DashboardPageLayout;

export default UsersSubscribersPage;
