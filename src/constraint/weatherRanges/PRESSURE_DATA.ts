import { EnvironmentRangesDataType } from "./environmentRanges.type";

export const pressureRanges:EnvironmentRangesDataType[] = [
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
] as const ;
