import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { useEffect, useMemo } from "react";
import { fetchContinentDataByName } from "../../redux/continent/getContinentDataByNameSlice";
import { GetContinentDataByNamePropsType } from "../../service/continent/getContinentDataByName";
import { GetContinentDataType } from "../../service/continent/getContinentDataByName.type";
import useGroupedData from "../useGroupedData";

function useGetContinentDataByName({ continentName, page, size }: GetContinentDataByNamePropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getContinentDataByName);

  useEffect(() => {
    dispatch(fetchContinentDataByName({ continentName, page, size }));
  }, [dispatch, continentName, page, size]);

  const sortContinentData = useMemo(() => {
    return data?.content
      ? [...data.content].sort((a: GetContinentDataType, b: GetContinentDataType) =>
          a.country_name.localeCompare(b.country_name),
        )
      : [];
  }, [data]);

  // const regionGroup = useMemo(() => {
  //   if (!sortContinentData) return {};
  //   return sortContinentData.reduce<DataGroupType<GetContinentDataType>>((acc, item) => {
  //     acc[item.region_name] = acc[item.region_name] || [];
  //     acc[item.region_name].push(item);
  //     return acc;
  //   }, {});
  // }, [sortContinentData]);

  const regionGroup = useGroupedData({ data: sortContinentData, groupKey: "region_name" });

  const sortedRegionNameGroup = useMemo(() => {
    return Object.entries(regionGroup).sort(([a], [b]) => {
      return a.localeCompare(b);
    });
  }, [regionGroup]);

  return {
    sortedRegionNameGroup,
    loading,
    error,
  };
}

export default useGetContinentDataByName;
