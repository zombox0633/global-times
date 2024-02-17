import { useEffect, useState } from "react";

type UseBoxHumidityPropsType = {
  humidityData: number;
};

type UseBoxHumidityType = {
  status: string;
  color: string;
};

function useBoxHumidity({
  humidityData,
}: UseBoxHumidityPropsType): UseBoxHumidityType {
  const [humidityValue, setHumidityValue] = useState<UseBoxHumidityType>({
    status: "",
    color: "bg-black",
  });

  useEffect(() => {
    let status = "";
    let color = "";

    switch (true) {
      case humidityData <= 30:
        status = "Very Dry";
        color = "bg-[#D6967A]";
        break;
      case humidityData > 30 && humidityData <= 60:
        status = "Comfortable";
        color = "bg-[#94D2BD]";
        break;
      case humidityData > 60 && humidityData <= 80:
        status = "High Humidity";
        color = "bg-[#0A9396]";
        break;
      case humidityData > 80:
        status = "Very High Humidity";
        color = "bg-[#005F73]";
        break;
      default:
        status = "";
        color = "bg-black";
        break;
    }

    setHumidityValue({ status, color });
  }, [humidityData]);

  return humidityValue;
}

export default useBoxHumidity;
