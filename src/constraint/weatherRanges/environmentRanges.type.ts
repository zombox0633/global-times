export type EnvironmentType = "humidity" | "pressure" | "wind" | "temperature";

export type EnvironmentPropsType = {
  type: EnvironmentType;
  data: number;
};

export type EnvironmentRangesDataType = {
  max?: number;
  min?: number;
  status?: string;
  color: string;
};

export type UseCalculateEnvironmentType = {
  status: string;
  color: string;
};
