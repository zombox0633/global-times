import { useNavigate } from "react-router-dom";

function ButtonNavigateToHome() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <button
      type='button'
      aria-label='Navigate to Home'
      onClick={navigateToHome}
      className='material-symbols-outlined'
    >
      arrow_back
    </button>
  );
}

export default ButtonNavigateToHome;
