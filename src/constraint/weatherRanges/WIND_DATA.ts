import { EnvironmentRangesDataType } from "./environmentRanges.type";

export const windSpeedKmHRanges:EnvironmentRangesDataType[] = [
  {
    max: 20,
    status: "Light",
    color: "bg-[#A3B18A]",
  },
  {
    min: 20,
    max: 40,
    status: "Moderate",
    color: "bg-[#7E9971]",
  },
  {
    min: 40,
    max: 60,
    status: "Strong",
    color: "bg-[#588157]",
  },
  {
    min: 60,
    max: 80,
    status: "Very Strong",
    color: "bg-[#3A5A40]",
  },
  {
    min: 80,
    status: "Storm",
    color: "bg-[#344E41]",
  },
];