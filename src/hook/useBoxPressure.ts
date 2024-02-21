import { useMemo } from "react";

type UseBoxPressurePropsType = {
  pressureData: number;
};

type PressureRangesType = {
  max?: number;
  min?: number;
  status: string;
  color: string;
};

export type UseBoxPressure = {
  status: string;
  color: string;
};

function useBoxPressure({ pressureData }: UseBoxPressurePropsType): UseBoxPressure {
  const pressureValue = useMemo(() => {
    const pressureRanges: PressureRangesType[] = [
      {
        max: 1000,
        status: "Low Pressure",
        color: "bg-[#9E2A2B]",
      },
      {
        min: 1000,
        max: 1020,
        status: "Normal Pressure",
        color: "bg-[#E09F3E]",
      },
      {
        min: 1020,
        status: "High Pressure",
        color: "bg-[#ADC178]",
      },
    ];

    const foundRange = pressureRanges.find(
      ({ min, max }) => pressureData >= (min ?? -Infinity) && pressureData <= (max ?? Infinity),
    );
    const result: UseBoxPressure = {
      status: foundRange?.status ?? "",
      color: foundRange?.color ?? "bg-black",
    };

    return result;
  }, [pressureData]);

  return pressureValue;
}

export default useBoxPressure;
