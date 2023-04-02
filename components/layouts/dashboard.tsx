// components/layouts/main
import Menu from '@/components/dashboard/menu';

const DashBoardLayout = ({ children }) => (
  <div className="main-container">

    <div className="content-wrapper">{children}</div>
    <div className="content-wrapper"><Menu />
</div>

  </div>
);

export default DashBoardLayout;