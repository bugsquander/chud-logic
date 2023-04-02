import { useRouter } from 'next/router';
import Link from 'next/link';
import { OptionsPageLayout } from '../index';
import nestLayout from '../../../utils/nestlayout';
import { useEffect } from 'react';

const DashboardPage = () => {
  return (
<>users</>  );
};

const NestedLayout = ({ children }) => {
  useEffect(() => {
    console.log('TeamPageLayout mounted');
    return () => console.log('TeamPageLayout unmounted');
  }, []);

  return (
      <section className="col-span-3">{children}</section>
  );
};

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

export const DashboardPageLayout = nestLayout(OptionsPageLayout, getLayout);

DashboardPage.getLayout = DashboardPageLayout;

export default DashboardPage;
