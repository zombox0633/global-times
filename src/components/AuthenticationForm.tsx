import { PropsWithChildren } from "react";
import ButtonNavigateToHome from "./ButtonNavigateToHome";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

type AuthenticationFormPropsType = {
  isLogin: boolean;
};

function AuthenticationForm({ isLogin, children }: PropsWithChildren<AuthenticationFormPropsType>) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <div className=' grid h-dvh w-dvw grid-cols-2 lg:grid-cols-[60%_40%]'>
      <div
        className={clsx("hidden pl-6 pt-6 md:block", {
          bg__grad1: isLogin,
          bg__grad2: !isLogin,
        })}
      >
        <ButtonNavigateToHome />
      </div>
      <div className='col-start-1 col-end-3 bg-black px-5 pt-8 md:col-start-2'>
        <div className=' flex h-[40rem] items-center justify-center'>
          <div className=' flex h-[30rem] w-[25rem] flex-col justify-between'>
            <div className=' h-24 px-10 py-8'>
              <div className=' mb-2'>
                <h2 className=' text-center text-5xl lg:text-4xl'>
                  Welcome {isAuthenticated ? "back" : ""}
                </h2>
              </div>
              <p className=' text-center text-lg'>
                {isLogin ? "Please login to continue" : "Create a new account to get started"}
              </p>
            </div>
            <div className="className='min-h-80'">
              {children}
              <div className='mt-10 flex items-center justify-center'>
                <NavLink to={isLogin ? "/sign-up" : "/login"}>
                  <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationForm;
