import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootType } from "../../redux/store";

function DataLoadingScreen() {
  const isLoading = useSelector((state: RootType) => state.loading.isLoading);
  const error = useSelector((state: RootType) => state.loading.error);

  return (
    <div
      className={clsx(
        "absolute z-30 flex h-[90dvh]  w-dvw items-center justify-start bg-blue-400",
        {
          loading__visible: isLoading || error,
          loading__hidden: !isLoading && !error,
          "bg-red-400 transition-all delay-150": error,
          "bg-blue-400 transition-all delay-150": !error && isLoading,
        },
      )}
    >
      <div className=' ml-16 flex h-96 w-96 items-center pr-2 md:pr-0 lg:w-[40rem]'>
        <h1>{error ?? "Hang tight, retrieving information..."}</h1>
      </div>
    </div>
  );
}

export default DataLoadingScreen;
