import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import DonationStats from '@/components/dashboard/stats/donations';

const StatsDonationsPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faMoneyBillTrendUp} className="text-vomit-500 mr-1" />
        <span>Donation Stats</span>
      </div>

      <div>
        <DonationStats />
      </div>
    </>
  );
};

StatsDonationsPage.getLayout = DashboardPageLayout;

export default StatsDonationsPage;
