import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Features from '@/components/dashboard/features';

import Link from 'next/link';

const DashboardFeatures = () => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faFaceSmile} className="text-vomit-500 mr-1" />
        <span>Features</span>
      </div>
    </>
  );
};
export default DashboardFeatures;
