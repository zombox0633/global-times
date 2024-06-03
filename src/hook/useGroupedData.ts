import { useMemo } from "react";

export type GroupPropsType<T> = {
  groupName: string;
  item: T[];
};

export type DataGroupType<T> = {
  [key: string]: T[];
};

export type UseGroupedDataPropType<T> = {
  data: T[];
  groupKey: keyof T;
};

function useGroupedData<T>({ data, groupKey }: UseGroupedDataPropType<T>) {
  return useMemo(() => {
    if (!data) return {};
    return data.reduce<DataGroupType<T>>((acc, item) => {
      const key = item[groupKey] as unknown as string;
      acc[key] = acc[key] || [];
      acc[key].push(item);

      return acc;
    }, {});
  }, [data, groupKey]);
}

export default useGroupedData;
