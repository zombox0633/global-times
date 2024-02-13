export type GlobalTimeType = {
  country: string;
  city: string;
  continent: string;
};

export type TimezoneDataType = GlobalTimeType[];


export const timezoneData: TimezoneDataType = [
  { country: "China", city: "Shanghai", continent: "Asia" },
  { country: "England", city: "London", continent: "Europe" },
  { country: "France", city: "Paris", continent: "Europe" },
  { country: "Germany", city: "Berlin", continent: "Europe" },
  { country: "India", city: "Kolkata", continent: "Asia" },
  { country: "Japan", city: "Tokyo", continent: "Asia" },
  { country: "Singapore", city: "Singapore", continent: "Asia" },
  { country: "Spain", city: "Madrid", continent: "Europe" },
  { country: "Thailand", city: "Bangkok", continent: "Asia" },
  { country: "USA", city: "New York", continent: "America" },
] as const;
