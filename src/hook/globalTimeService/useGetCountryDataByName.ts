import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { useEffect, useMemo } from "react";
import { fetchCountryDataByName } from "../../redux/country/getCountryDataByNameSlice";
import { GetCountryDataByNamePropsType } from "../../service/country/getCountryDataByName";
import { GlobalTimeDataType } from "../../service/GlobalTimeService.type";
import { utcFormat } from "../../helper/formatTime";
import useGroupedData from "../useGroupedData";

function useGetCountryDataByName({ countryName, page, size }: GetCountryDataByNamePropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getCountryDataByName);

  useEffect(() => {
    dispatch(fetchCountryDataByName({ countryName, page, size }));
  }, [dispatch, countryName, page, size]);

  const sortCountryData = useMemo(() => {
    return data?.content
      ? [...data.content].sort((a: GlobalTimeDataType, b: GlobalTimeDataType) =>
          a.city_name.localeCompare(b.city_name),
        )
      : [];
  }, [data]);

  // const timezoneNameGroup = useMemo(() => {
  //   if (!sortCountryData) return {};
  //   return sortCountryData.reduce<DataGroupType<GlobalTimeDataType>>((acc, item) => {
  //     acc[item.timezone_name] = acc[item.timezone_name] || [];
  //     acc[item.timezone_name].push(item);
  //     return acc;
  //   }, {});
  // }, [sortCountryData]);

  const timezoneNameGroup = useGroupedData({ data: sortCountryData, groupKey: "timezone_name" });

  const sortedTimezoneNameGroup = useMemo(() => {
    return Object.entries(timezoneNameGroup).sort(([a], [b]) => {
      const offsetA = utcFormat(a, false).split("UTC")[1];
      const offsetB = utcFormat(b, false).split("UTC")[1];

      return offsetA.localeCompare(offsetB);
    });
  }, [timezoneNameGroup]);

  return {
    sortedTimezoneNameGroup,
    loading,
    error,
  };
}

export default useGetCountryDataByName;
