import { EnvironmentRangesDataType } from "./environmentRanges.type";

export const humidityRanges: EnvironmentRangesDataType[] = [
  {
    max: 30,
    status: "Very Dry",
    color: "bg-[#D6967A]",
  },
  {
    min: 30,
    max: 60,
    status: "Comfortable",
    color: "bg-[#94D2BD]",
  },
  {
    min: 60,
    max: 80,
    status: "High Humidity",
    color: "bg-[#0A9396]",
  },
  {
    min: 80,
    status: "Very High Humidity",
    color: "bg-[#005F73]",
  },
] as const;
