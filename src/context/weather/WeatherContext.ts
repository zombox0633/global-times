import { createContext, useContext } from "react";
import { WeatherType } from "../../api/getWeatherService.type";

export type WeatherContextType = {
  weatherRecords: WeatherType[];
  addCity: (cityData: string) => void;
};


export const WeatherContext = createContext<WeatherContextType>({
  weatherRecords:[],
  addCity: () => {}
})

export const useWeatherContext = (): WeatherContextType =>
  useContext<WeatherContextType>(WeatherContext);