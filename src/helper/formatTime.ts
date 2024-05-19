import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const utcFormat = (formatTimezone: string, isStandardTime: boolean): string => {
  const date = isStandardTime ? "2022-01-01" : dayjs();
  const localTime = dayjs.tz(date, formatTimezone);
  const standardOffset = localTime.utcOffset();

  const hours = Math.floor(Math.abs(standardOffset) / 60);
  const minutes = Math.abs(standardOffset) % 60;

  const offsetString = `UTC${standardOffset >= 0 ? "+" : "-"}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

  return offsetString;
};

export const checkTimesEqual = (st: string, dlt: string): boolean => {
  return st === dlt;
};
