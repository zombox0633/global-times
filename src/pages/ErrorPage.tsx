function ErrorPage() {
  return (
    <div className=" grid justify-between w-dvw h-dvh p-4 sm:p-8 md:p-12">
      <span className=" text-xl">404</span>
      <div>
        <div className=" my-8">
          <h1>Page not found</h1>
        </div>
        <p className="text-xl">The page you are looking for doesn't exist.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
