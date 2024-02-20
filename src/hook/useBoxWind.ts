import { useMemo } from "react";

type UseBoxWindPropsType = {
  windData: number;
};

 type WindSpeedKmHRangesType = {
  max?: number;
  min?: number;
  status: string;
  color: string;
};

export type UseBoxWindType = {
  windSpeed: number;
  status: string;
  color: string;
};

function useBoxWind({ windData }: UseBoxWindPropsType): UseBoxWindType {
  const windValue = useMemo(() => {
    const windSpeedKmH = windData * 3.6;
    const windSpeedKmHRanges: WindSpeedKmHRangesType[] = [
      { max: 20, status: "Light", color: "bg-[#A3B18A]" },
      { min: 20, max: 40, status: "Moderate", color: "bg-[#7E9971]" },
      { min: 40, max: 60, status: "Strong", color: "bg-[#588157]" },
      { min: 60, max: 80, status: "Very Strong", color: "bg-[#3A5A40]" },
      { min: 80, status: "Storm", color: "bg-[#344E41]" },
    ];

    const foundRange = windSpeedKmHRanges.find(
      ({ min, max }) =>
        windSpeedKmH >= (min ?? -Infinity) && windSpeedKmH <= (max ?? Infinity)
    );
    const result: UseBoxWindType = {
      windSpeed: windSpeedKmH,
      status: foundRange?.status ?? "",
      color: foundRange?.color ?? "bg-black",
    };

    return result;

  }, [windData]);
  
  return windValue;
}

export default useBoxWind;
