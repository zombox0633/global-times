import { Outlet } from "react-router-dom";
import NavigationBar from "./navigation/NavigationBar";
import DataLoadingScreen from "./loader/DataLoadingScreen";

function Layout() {
  return (
    <div className='relative flex h-dvh min-h-dvh flex-col justify-between overflow-x-hidden'>
      <NavigationBar />
      <div className=' flex-grow'>
        <DataLoadingScreen />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
