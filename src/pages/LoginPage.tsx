import AuthenticationForm from "../components/AuthenticationForm";
import useAuthentication from "../hook/user/useAuthentication";

function LoginPage() {
  const { authStatus, isProcessing, handleChange, onAuthenticate } = useAuthentication();

  return (
    <>
      <AuthenticationForm isLogin={true}>
        <form onSubmit={onAuthenticate} className=' flex h-56 flex-col justify-between px-10'>
          <input
            type='email'
            name='email'
            placeholder='Email address'
            min={12}
            required
            onChange={handleChange}
            disabled={isProcessing}
            className='authentication__input'
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            min={8}
            required
            onChange={handleChange}
            disabled={isProcessing}
            className='authentication__input'
          />
          <div className=' relative w-80'>
            <button
              type='submit'
              disabled={isProcessing}
              className='w-80 bg-eerieBlack py-2 text-lg'
            >
              Continue
            </button>
            <div className=' mr-1 mt-2 flex h-8 justify-end'>
              <span className=' text-sm'>{authStatus}</span>
            </div>
          </div>
        </form>
      </AuthenticationForm>
    </>
  );
}

export default LoginPage;
