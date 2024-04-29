import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { useEffect } from "react";
import { fetchCountryDataByName } from "../../redux/country/getCountryDataByNameSlice";
import { GetCountryDataByNamePropsType } from "../../service/country/getCountryDataByName";

function useGetCountryDataByName({ countryName, page, size }: GetCountryDataByNamePropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getCountryDataByName);

  useEffect(() => {
    dispatch(fetchCountryDataByName({ countryName, page, size }));
  }, [dispatch, countryName, page, size]);

  return {
    data,
    loading,
    error,
  };
}

export default useGetCountryDataByName;
