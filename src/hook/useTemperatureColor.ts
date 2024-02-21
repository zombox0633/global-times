import { useMemo } from "react";

type UseTemperatureColorPropsType = {
  tempData: number;
};

type TemperatureRangesType = {
  max?: number;
  min?: number;
  color: string;
};

function useTemperatureColor({ tempData }: UseTemperatureColorPropsType): string {
  const tempColor = useMemo(() => {
    const temperatureRanges: TemperatureRangesType[] = [
      { max: -20, color: "bg-[#15195F]" },
      {
        min: -20,
        max: -15,
        color: "bg-[#1C227E]",
      },
      {
        min: -15,
        max: -10,
        color: "bg-[#2D36CB]",
      },
      {
        min: -10,
        max: -5,
        color: "bg-[#2B69FD]",
      },
      {
        min: -5,
        max: 0,
        color: "bg-[#2783EE]",
      },
      { min: 0, max: 5, color: "bg-[#239DDE]" },
      {
        min: 5,
        max: 10,
        color: "bg-[#27AABC]",
      },
      {
        min: 10,
        max: 15,
        color: "bg-[#24C487]",
      },
      {
        min: 15,
        max: 20,
        color: "bg-[#42CE4B]",
      },
      {
        min: 20,
        max: 25,
        color: "bg-[#92C652]",
      },
      {
        min: 25,
        max: 30,
        color: "bg-[#F9B234]",
      },
      {
        min: 30,
        max: 35,
        color: "bg-[#DC721A]",
      },
      {
        min: 35,
        max: 40,
        color: "bg-[#CE520D]",
      },
      {
        min: 40,
        max: 45,
        color: "bg-[#BF3100]",
      },
      { min: 45, color: "bg-[#841100]" },
    ];

    const foundRange = temperatureRanges.find(
      ({ min, max }) => tempData >= (min ?? -Infinity) && tempData <= (max ?? Infinity),
    );
    const color = foundRange ? foundRange.color : "bg-black";

    return color;
  }, [tempData]);

  return tempColor;
}

export default useTemperatureColor;
