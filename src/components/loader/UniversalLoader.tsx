import clsx from "clsx";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { fetchHealthCheck } from "../../redux/healthSlice";

function UniversalLoader({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const health = useSelector((state: RootType) => state.health);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        setIsLoading(false);
        navigate("/error", { replace: true, state: { code: 503 } });
      }, 10000);

      try {
        await dispatch(fetchHealthCheck()).unwrap();
        clearTimeout(timeoutId);
        setIsLoading(false);

        if (health.data === null && health.error) {
          navigate("/error", { replace: true, state: { code: 503 } });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      setIsLoading(false);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <div className=' relative'>
      <div
        className={clsx(
          "absolute top-0 z-[60] flex h-screen w-screen items-center justify-center bg-eerieBlack",
          {
            loading__visible: isLoading,
            loading__hidden: !isLoading,
          },
        )}
      >
        {isLoading && (
          <div className=' flex h-20 w-64 flex-row items-center justify-center'>
            <div className='pulse1' />
            <div className='pulse2' />
            <div className='pulse3' />
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

export default UniversalLoader;
