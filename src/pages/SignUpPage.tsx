import { NavLink } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";

function SignUpPage() {
  return (
    <>
      <AuthenticationForm isLogin={false}>
        <div className='min-h-80'>
          <div className=' flex h-60 flex-col justify-between px-10'>
            <input
              type='email'
              name='email'
              min={12}
              required
              placeholder='Email'
              className='authentication__input'
            />
            <input
              type='password'
              name='password'
              min={8}
              required
              placeholder='Password'
              className='authentication__input'
            />
            <input
              type='password'
              name='confirmPassword'
              min={8}
              required
              placeholder='Confirm Password'
              className='authentication__input'
            />
            <button type='submit' className='bg-eerieBlack py-2 text-lg'>
              Continue
            </button>
          </div>
          <div className='mt-8 flex items-center justify-center'>
            <NavLink to={"/login"}>
              <p>Already have an account?</p>
            </NavLink>
          </div>
        </div>
      </AuthenticationForm>
    </>
  );
}

export default SignUpPage;
