import { useEffect, useState } from "react";

type UseTemperatureColorPropsType = {
  tempData: number;
};

function useTemperatureColor({ tempData }: UseTemperatureColorPropsType) {
  const [tempColor, setTempColor] = useState<string>("bg-[#ffff]");

  useEffect(() => {
    switch (true) {
      case tempData < -20:
        setTempColor("bg-[#15195F]");
        break;
      case tempData >= -20 && tempData < -15:
        setTempColor("bg-[#1C227E]");
        break;
      case tempData >= -15 && tempData < -10:
        setTempColor("bg-[#2D36CB]");
        break;
      case tempData >= -10 && tempData < -5:
        setTempColor("bg-[#2B69FD]");
        break;
      case tempData >= -5 && tempData < 0:
        setTempColor("bg-[#2783EE]");
        break;
      case tempData > 0 && tempData <= 5:
        setTempColor("bg-[#239DDE]");
        break;
      case tempData > 5 && tempData <= 10:
        setTempColor("bg-[#27AABC]");
        break;
      case tempData > 10 && tempData <= 15:
        setTempColor("bg-[#24C487]");
        break;
      case tempData > 15 && tempData <= 20:
        setTempColor("bg-[#42CE4B]");
        break;
      case tempData > 20 && tempData <= 25:
        setTempColor("bg-[#92C652]");
        break;
      case tempData > 25 && tempData <= 30:
        setTempColor("bg-[#F9B234]");
        break;
      case tempData > 30 && tempData <= 35:
        setTempColor("bg-[#DC721A]");
        break;
      case tempData > 35 && tempData <= 40:
        setTempColor("bg-[#CE520D]");
        break;
      case tempData > 40 && tempData <= 45:
        setTempColor("bg-[#BF3100]");
        break;
      case tempData > 45:
        setTempColor("bg-[#841100]");
        break;
      default:
        setTempColor("bg-[#000]");
        break;
    }
  }, [tempData]);

  return { tempColor };
}

export default useTemperatureColor;
