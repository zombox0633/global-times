export type GlobalTimeType = {
  country: string;
  timeZone: string;
};

export type timezoneDataType = GlobalTimeType[];

export const timezoneData: timezoneDataType = [
  { country: "China", timeZone: "Asia/Shanghai" },
  { country: "England", timeZone: "Europe/London" },
  { country: "France", timeZone: "Europe/Paris" },
  { country: "Germany", timeZone: "Europe/Berlin" },
  { country: "India", timeZone: "Asia/Kolkata" },
  { country: "Japan", timeZone: "Asia/Tokyo" },
  { country: "Singapore", timeZone: "Asia/Singapore" },
  { country: "Spain", timeZone: "Europe/Madrid" },
  { country: "Thailand", timeZone: "Asia/Bangkok" },
  { country: "USA", timeZone: "America/New_York" },
] as const;