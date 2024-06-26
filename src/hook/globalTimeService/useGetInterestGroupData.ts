import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../../redux/store";
import { useEffect } from "react";
import { fetchInterestGroupData } from "../../redux/interest/getInterestGroupData.thunk";
import { GetInterestGroupDataPropsType } from "../../service/interest/getInterestGroupData";
import { InterestDataType } from "../../service/interest/getInterestGroupData.type";

function useGetInterestGroupData({ page, size }: GetInterestGroupDataPropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getInterestGroupData);

  useEffect(() => {
    dispatch(fetchInterestGroupData({ page, size }));
  }, [dispatch, page, size]);

  const sortInterestData = data?.content
    ? [...data.content].sort((a: InterestDataType, b: InterestDataType) =>
        a.country_name.localeCompare(b.country_name),
      )
    : [];

  return {
    sortInterestData,
    loading,
    error,
  };
}

export default useGetInterestGroupData;
