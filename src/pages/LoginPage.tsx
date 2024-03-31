import AuthenticationForm from "../components/AuthenticationForm";

function LoginPage() {
  return (
    <>
      <AuthenticationForm isLogin={true}>
        <div className='min-h-80'>
          <div className=' flex h-48 flex-col justify-between px-10'>
            <input type='email' placeholder='Email address' className='authentication__input' />
            <input
              type='password'
              placeholder='Password address'
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

export default LoginPage;
