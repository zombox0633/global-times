import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { fetchCityByCityName } from "../../redux/city/getCityByCityNameSlice";
import { GetCityByCityNamePropsType } from "../../service/city/getCityByCityName";

function useGetCityByCityName({ cityName }: GetCityByCityNamePropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getCityByCityName);

  useEffect(() => {
    dispatch(fetchCityByCityName({ cityName }));
  }, [dispatch, cityName]);

  return {
    data,
    loading,
    error,
  };
}

export default useGetCityByCityName;
