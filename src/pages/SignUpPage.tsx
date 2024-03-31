import AuthenticationForm from "../components/AuthenticationForm";

function SignUpPage() {
  return (
    <>
      <AuthenticationForm isLogin={false} >
        <div className='min-h-80'>
          <div className=' flex h-60 flex-col justify-between px-10'>
            <input
              type='email'
              placeholder='Email'
              className='authentication__input'
            />
            <input
              type='password'
              placeholder='Password'
              className='authentication__input'
            />
            <input
              type='password'
              placeholder='Confirm Password'
              className='authentication__input'
            />
            <button className='py-2 text-lg'>Continue</button>
          </div>
          <div className='mt-8 flex items-center justify-center'>
            <p>Don't have an account?</p>
          </div>
        </div>
      </AuthenticationForm>
    </>
  );
}

export default SignUpPage;
