import AuthenticationForm from "../components/AuthenticationForm";
import useCreateAccount from "../hook/user/useCreateAccount";

function SignUpPage() {
  const { authStatus, isProcessing, handleChange, handleCreateAccount } = useCreateAccount();
  return (
    <>
      <AuthenticationForm isLogin={false}>
        <form onSubmit={handleCreateAccount} className=' flex h-64 flex-col justify-between px-10'>
          <input
            type='email'
            name='email'
            min={12}
            required
            placeholder='Email'
            onChange={handleChange}
            disabled={isProcessing}
            className='authentication__input'
          />
          <input
            type='password'
            name='password'
            min={8}
            required
            placeholder='Password'
            onChange={handleChange}
            disabled={isProcessing}
            className='authentication__input'
          />
          <input
            type='password'
            name='confirmPassword'
            min={8}
            required
            placeholder='Confirm Password'
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

export default SignUpPage;
