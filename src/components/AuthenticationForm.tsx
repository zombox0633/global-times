import { PropsWithChildren } from "react";
import ButtonNavigateToHome from "./ButtonNavigateToHome";

type AuthenticationFormPropsType = {
  isLogin: boolean;
};

function AuthenticationForm({ isLogin, children }: PropsWithChildren<AuthenticationFormPropsType>) {
  return (
    <div className=' grid h-dvh w-dvw grid-cols-2 lg:grid-cols-[60%_40%]'>
      <div className='bg__gradient hidden pl-6 pt-6 md:block'>
        <ButtonNavigateToHome />
      </div>
      <div className='col-start-1 col-end-3 bg-black px-5 pt-8 md:col-start-2'>
        <div className=' flex h-[40rem] items-center justify-center'>
          <div className=' flex h-[30rem] w-[25rem] flex-col justify-between'>
            <div className=' h-24 px-10 py-8'>
              <div className=' mb-2'>
                <h2 className=' text-center text-5xl lg:text-4xl'>Welcome</h2>
              </div>
              <p className=' text-center text-lg'>
                {isLogin ? "Please login to continue" : "Create a new account to get started"}
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationForm;
