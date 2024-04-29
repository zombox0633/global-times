import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { useEffect } from "react";
import { fetchCountryWithSearch } from "../../redux/country/getCountryWithSearchSlice";
import { GetCountryWithSearchPropsType } from "../../service/country/getCountryWithSearch";

function useGetCountryWithSearch({ countryName, page, size }: GetCountryWithSearchPropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getCountryWithSearch);

  useEffect(() => {
    dispatch(fetchCountryWithSearch({ countryName, page, size }));
  }, [dispatch, countryName, page, size]);

  return {
    data,
    loading,
    error,
  };
}

export default useGetCountryWithSearch;
