import Link from 'next/link';
import { useEffect } from 'react';
import Menu from '@/components/dashboard/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
  return (
    <div className="text-2xl uppercase italic font-black mb-5">
      <FontAwesomeIcon icon={faTableCells} className="text-vomit-500 mr-1" />
      <span>Dashboard</span>
    </div>
  );
};

export const NestedLayout = ({ children }) => {
  useEffect(() => {
    console.log('TeamsPageLayout mounted');
    return () => console.log('TeamsPageLayout unmounted');
  }, []);
  return (
    <div className="lg:grid lg:grid-cols-4 gap-5">
      <section className="lg:col-span-3 bg-black/20 rounded-lg p-5 border border-zinc-800">
        {children}

      </section>
      <aside>
        <Menu />
      </aside>
    </div>
  );
};

export const OptionsPageLayout = (page) => <NestedLayout>{page}</NestedLayout>;

DashboardPage.getLayout = OptionsPageLayout;

export default DashboardPage;
