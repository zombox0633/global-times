import { useEffect, useState } from "react";

type UseTemperatureColorPropsType = {
  tempData: number;
};

function useTemperatureColor({
  tempData,
}: UseTemperatureColorPropsType): string {
  const [tempColor, setTempColor] = useState<string>("bg-[#ffff]");

  useEffect(() => {
    let color = "";

    switch (true) {
      case tempData < -20:
        color = "bg-[#15195F]";
        break;
      case tempData >= -20 && tempData < -15:
        color = "bg-[#1C227E]";
        break;
      case tempData >= -15 && tempData < -10:
        color = "bg-[#2D36CB]";
        break;
      case tempData >= -10 && tempData < -5:
        color = "bg-[#2B69FD]";
        break;
      case tempData >= -5 && tempData < 0:
        color = "bg-[#2783EE]";
        break;
      case tempData >= 0 && tempData <= 5:
        color = "bg-[#239DDE]";
        break;
      case tempData > 5 && tempData <= 10:
        color = "bg-[#27AABC]";
        break;
      case tempData > 10 && tempData <= 15:
        color = "bg-[#24C487]";
        break;
      case tempData > 15 && tempData <= 20:
        color = "bg-[#42CE4B]";
        break;
      case tempData > 20 && tempData <= 25:
        color = "bg-[#92C652]";
        break;
      case tempData > 25 && tempData <= 30:
        color = "bg-[#F9B234]";
        break;
      case tempData > 30 && tempData <= 35:
        color = "bg-[#DC721A]";
        break;
      case tempData > 35 && tempData <= 40:
        color = "bg-[#CE520D]";
        break;
      case tempData > 40 && tempData <= 45:
        color = "bg-[#BF3100]";
        break;
      case tempData > 45:
        color = "bg-[#841100]";
        break;
      default:
        color = "bg-[#000]";
        break;
    }

    setTempColor(color);
  }, [tempData]);

  return tempColor;
}

export default useTemperatureColor;
