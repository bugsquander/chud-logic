import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import SubscriptionStats from '@/components/dashboard/stats/subscriptions';

const StatsSubscriptionsPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faFaceSmile} className="text-vomit-500 mr-1" />
        <span>Subscription Stats</span>
      </div>

      <div>
        <SubscriptionStats />
      </div>
    </>
  );
};

StatsSubscriptionsPage.getLayout = DashboardPageLayout;

export default StatsSubscriptionsPage;
