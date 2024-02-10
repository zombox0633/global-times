export type GlobalTimeType = {
  country: string;
  capital: string;
  timeZone: string;
};

export type timezoneDataType = GlobalTimeType[];

export const timezoneData: timezoneDataType = [
  { country: "China", capital: "Beijing", timeZone: "Asia/Shanghai" },
  { country: "England", capital: "London", timeZone: "Europe/London" },
  { country: "France", capital: "Paris", timeZone: "Europe/Paris" },
  { country: "Germany", capital: "Berlin", timeZone: "Europe/Berlin" },
  { country: "India", capital: "New Delhi", timeZone: "Asia/Kolkata" },
  { country: "Japan", capital: "Tokyo", timeZone: "Asia/Tokyo" },
  { country: "Singapore", capital: "Singapore", timeZone: "Asia/Singapore" },
  { country: "Spain", capital: "Madrid", timeZone: "Europe/Madrid" },
  { country: "Thailand", capital: "Bangkok", timeZone: "Asia/Bangkok" },
  { country: "USA", capital: "Washington, D.C.", timeZone: "America/New_York" },
] as const;
