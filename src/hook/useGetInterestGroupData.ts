import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../redux/store";
import { useEffect } from "react";
import { fetchInterestGroupData } from "../redux/interest/getInterestGroupData.thunk";
import { GetInterestGroupDataPropsType } from "../service/interest/getInterestGroupData";
import { ContentDataType } from "../service/interest/getInterestGroupData.type";

function useGetInterestGroupData({ page, size }: GetInterestGroupDataPropsType) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootType) => state.getInterestGroupData);

  useEffect(() => {
    dispatch(fetchInterestGroupData({ page, size }));
  }, [dispatch, page, size]);

  const sortedInterestGroupData = data?.content.sort((a: ContentDataType, b: ContentDataType) =>
    a.city_name.localeCompare(b.city_name),
  );

  return {
    sortedInterestGroupData,
    loading,
    error,
  };
}

export default useGetInterestGroupData;
