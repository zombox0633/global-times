import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { useEffect } from "react";
import { fetchContinentDataByName } from "../../redux/continent/getContinentDataByNameSlice";
import { GetContinentDataByNamePropsType } from "../../service/continent/getContinentDataByName";

function useGetContinentDataByName({ continentName, page, size }: GetContinentDataByNamePropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getContinentDataByName);

  useEffect(() => {
    dispatch(fetchContinentDataByName({ continentName, page, size }));
  }, [dispatch, continentName, page, size]);

  return {
    data,
    loading,
    error,
  };
}

export default useGetContinentDataByName;
