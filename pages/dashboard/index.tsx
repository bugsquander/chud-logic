import Link from "next/link";
import { useEffect } from "react";
import Menu from '@/components/dashboard/menu';

const DashboardPage = () => {
  return <div>Dashboard</div>;
};

export const NestedLayout = ({ children }) => {
  useEffect(() => {
    console.log("TeamsPageLayout mounted");
    return () => console.log("TeamsPageLayout unmounted");
  }, []);
  return (
    <div className="lg:grid lg:grid-cols-4 gap-5">
        <section className="lg:col-span-3 bg-black/20 rounded p-5">
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