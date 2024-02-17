import { useEffect, useState } from "react";

type UseBoxWindPropsType = {
  windData: number;
};

type UseBoxWindType = {
  windSpeed: number;
  status: string;
  color: string;
};

function useBoxWind({ windData }: UseBoxWindPropsType): UseBoxWindType {
  const [windValue, setWindValue] = useState<UseBoxWindType>({
    windSpeed: 0,
    status: "",
    color: "bg-black",
  });

  useEffect(() => {
    const windSpeedKmH = windData * 3.6;
    let status = "";
    let color = "";

    switch (true) {
      case windSpeedKmH < 20:
        status = "Light";
        color = "bg-[#A3B18A]";
        break;
      case windSpeedKmH >= 20 && windSpeedKmH < 40:
        status = "Moderate";
        color = "bg-[#7E9971]";
        break;
      case windSpeedKmH >= 40 && windSpeedKmH < 60:
        status = "Strong";
        color = "bg-[#588157]";
        break;
      case windSpeedKmH >= 60 && windSpeedKmH <= 80:
        status = "Very Strong";
        color = "bg-[#3A5A40]";
        break;
      case windSpeedKmH > 80:
        status = "Storm";
        color = "bg-[#344E41]";
        break;
      default:
        status = "";
        color = "bg-black";
        break;
    }

    setWindValue({
      windSpeed: windSpeedKmH,
      status: status,
      color: color,
    });
  }, [windData]);

  return windValue;
}

export default useBoxWind;
