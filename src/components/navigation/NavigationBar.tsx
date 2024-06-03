import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import { RootType } from "../../redux/store";
import useAuthentication from "../../hook/user/useAuthentication";

const ContinentList = ["Africa", "America", "Asia", "Australia", "Europe"];

function NavigationBar() {
  const { data } = useSelector((state: RootType) => state.getRegister);
  const { onSignOut } = useAuthentication();

  return (
    <div className=' sticky left-0 top-0 z-40'>
      <div className=' flex h-20 items-center justify-between bg-eerieBlack/60 pl-4 pr-6 backdrop-blur-lg sm:pl-8 sm:pr-9 md:pl-16 md:pr-12'>
        <div className=' flex w-40 items-center justify-between sm:w-56 md:w-72 lg:w-80'>
          <NavLink to='/' className=' font-BebasNeue text-2xl sm:text-3xl md:text-[40px]'>
            TimeZone
          </NavLink>
          <div className='sm:pt-2 md:pt-1'>
            <Dropdown label='Continent' data={ContinentList} />
          </div>
        </div>
        {data ? (
          <button
            type='button'
            onClick={onSignOut}
            className=' font-BebasNeue text-lg hover:border-transparent sm:text-2xl md:text-[30px]'
          >
            SignOut
          </button>
        ) : (
          <div className=' flex max-w-56 items-end justify-between sm:pt-2 md:pt-1'>
            <NavLink
              to='/login'
              className='navlink__style px-2 py-1 font-BebasNeue text-lg hover:bg-black/20 sm:text-2xl md:px-4 md:text-[30px]'
            >
              Login
            </NavLink>
            <NavLink
              to='/sign-up'
              className='navlink__style px-2 py-1 font-BebasNeue text-lg hover:bg-black/20 sm:text-2xl md:px-4 md:text-[30px]'
            >
              SignUp
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
