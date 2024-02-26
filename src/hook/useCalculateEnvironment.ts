import { useMemo } from "react";
import { EnvironmentPropsType, UseCalculateEnvironmentType } from "../constraint/weatherRanges/environmentRanges.type";
import { humidityRanges } from "../constraint/weatherRanges/HUMIDITY_DATA";
import { pressureRanges } from "../constraint/weatherRanges/PRESSURE_DATA";
import { windSpeedKmHRanges } from "../constraint/weatherRanges/WIND_DATA";
import { temperatureRanges } from "../constraint/weatherRanges/TEMPERATURE_DATA";

function useCalculateEnvironment({
  type,
  data,
}: EnvironmentPropsType): UseCalculateEnvironmentType {

  const environmentValue = useMemo(() => {
    let ranges;
    switch (type) {
      case "humidity":
        ranges = humidityRanges;
        break;
      case "pressure":
        ranges = pressureRanges;
        break;
      case "wind":
        ranges = windSpeedKmHRanges;
        break;
      case "temperature":
        ranges = temperatureRanges;
        break;
      default:
        throw new Error(`Unknown environment type: ${type}`);
    }

    const foundRange = ranges.find(
      ({ min, max }) => data >= (min ?? -Infinity) && data <= (max ?? Infinity),
    );

    return {
      status: foundRange?.status ?? "Unknown",
      color: foundRange?.color ?? "bg-black",
    };
  }, [type, data]);

  return environmentValue;
}

export default useCalculateEnvironment;
