import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Emotes from '@/pages/emotes';

const FeaturesEmotesPage = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faFaceSmile} className="text-vomit-500 mr-1" />
        <span>Emotes</span>
      </div>

      <div>
        <Emotes />
      </div>
    </>
  );
};

FeaturesEmotesPage.getLayout = DashboardPageLayout;

export default FeaturesEmotesPage;
