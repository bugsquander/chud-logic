import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import Goals from '@/components/dashboard/features/goals';

const FeaturesGoalsPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faBullseye} className="text-vomit-500 mr-1" />
        <span>Goals</span>
      </div>

      <div>
        <Goals />
      </div>
    </>
  );
};

FeaturesGoalsPage.getLayout = DashboardPageLayout;

export default FeaturesGoalsPage;
