import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { useEffect } from "react";
import { fetchCountryDataByName } from "../../redux/country/getCountryDataByNameSlice";
import { GetCountryDataByNamePropsType } from "../../service/country/getCountryDataByName";
import { GlobalTimeDataType } from "../../service/GlobalTimeService.type";

function useGetCountryDataByName({ countryName, page, size }: GetCountryDataByNamePropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getCountryDataByName);

  useEffect(() => {
    dispatch(fetchCountryDataByName({ countryName, page, size }));
  }, [dispatch, countryName, page, size]);

  const sortCountryData = data?.content
    ? [...data.content].sort((a: GlobalTimeDataType, b: GlobalTimeDataType) =>
        a.city_name.localeCompare(b.city_name),
      )
    : [];

  return {
    sortCountryData,
    loading,
    error,
  };
}

export default useGetCountryDataByName;
