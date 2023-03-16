import { AppBars } from 'components/AppBars/AppBars';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBars />
      <Outlet />
    </div>
  );
};
