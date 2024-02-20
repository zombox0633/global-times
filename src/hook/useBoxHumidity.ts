import { useMemo } from "react";

type UseBoxHumidityPropsType = {
  humidityData: number;
};

type HumidityRangesType = {
  max?: number;
  min?: number;
  status: string;
  color: string;
};

export type UseBoxHumidityType = {
  status: string;
  color: string;
};

function useBoxHumidity({
  humidityData,
}: UseBoxHumidityPropsType): UseBoxHumidityType {
  const humidityValue = useMemo(() => {
    const humidityRanges: HumidityRangesType[] = [
      { max: 30, status: "Very Dry", color: "bg-[#D6967A]" },
      { min: 30, max: 60, status: "Comfortable", color: "bg-[#94D2BD]" },
      { min: 60, max: 80, status: "High Humidity", color: "bg-[#0A9396]" },
      { min: 80, status: "Very High Humidity", color: "bg-[#005F73]" },
    ];

    const foundRange = humidityRanges.find(
      ({ min, max }) =>
        humidityData >= (min ?? -Infinity) && humidityData <= (max ?? Infinity)
    );
    const result: UseBoxHumidityType = {
      status: foundRange?.status ?? "",
      color: foundRange?.color ?? "bg-black",
    };

    return result;
  }, [humidityData]);

  return humidityValue;
}

export default useBoxHumidity;
