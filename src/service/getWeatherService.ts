import axios from "axios";
import { onHandleErrorFromAPI } from "../config/serviceApi";
import { AxiosReturn } from "../config/serviceApi.type";
import { GetWeatherServicePropsType, WeatherType } from "./getWeatherService.type";

async function getWeatherService({ city }: GetWeatherServicePropsType): AxiosReturn<WeatherType> {
  try {
    const apiKey = import.meta.env.VITE_API_OPEN_WEATHERH;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
    );
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getWeatherService;
