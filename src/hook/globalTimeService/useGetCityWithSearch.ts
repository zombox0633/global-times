import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { useEffect } from "react";
import { fetchCityDataWithSearchCityName } from "../../redux/city/getCityWithSearchSlice";
import { GetCityWithSearchPropsType } from "../../service/city/getCityWithSearch";

function useGetCityWithSearch({ cityName, page, size }: GetCityWithSearchPropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getCityWithSearch);

  useEffect(() => {
    dispatch(fetchCityDataWithSearchCityName({ cityName, page, size }));
  }, [dispatch, cityName, page, size]);

  return {
    data,
    loading,
    error,
  };
}

export default useGetCityWithSearch;
