import { useEffect, useState } from "react";

type UseBoxPressurePropsType = {
  pressureData: number;
};

type UseBoxPressure = {
  status: string;
  color: string;
};

function useBoxPressure({
  pressureData,
}: UseBoxPressurePropsType): UseBoxPressure {
  const [pressureValue, setPressureValue] = useState<UseBoxPressure>({
    status: "",
    color: "bg-black",
  });

  useEffect(() => {
    let status = "";
    let color = "";

    switch (true) {
      case pressureData < 1000:
        status = "Low Pressure";
        color = "bg-[#9E2A2B]";
        break;
      case pressureData >= 1000 && pressureData <= 1020:
        status = "Normal Pressure";
        color = "bg-[#E09F3E]";
        break;
      case pressureData > 1020:
        status = "High Pressure";
        color = "bg-[#ADC178]";
        break;
      default:
        status = "";
        color = "bg-black";
        break;
    }

    setPressureValue({ status, color });
  }, [pressureData]);

  return pressureValue;
}

export default useBoxPressure;
