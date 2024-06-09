import { useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();
  const code = location.state?.code || 404;
  const message =
    code === 404
      ? "The page you are looking for doesn't exist."
      : "Service Unavailable. Please try again later.";

  return (
    <div className=' grid h-dvh w-dvw justify-between p-4 sm:p-8 md:p-12'>
      <span className=' text-xl'>{code}</span>
      <div>
        <div className=' my-8'>
          <h1>{code === 404 ? "Page not found" : "Service Unavailable"}</h1>
        </div>
        <p className='text-xl'>{message}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
