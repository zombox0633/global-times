import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-dvw h-dvh p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <Outlet />
    </div>
  );
}

export default Layout;
