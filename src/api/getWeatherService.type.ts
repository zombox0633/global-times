export type GetWeatherServicePropsType = {
  city: string;
};

export interface WeatherType {
  base: string;
  clouds: CloudsDataType;
  cod: number;
  coord: CoordDataType;
  dt: number;
  id: number;
  main: WeatherDataType;
  name: string;
  sys: SystemDataType;
  timezone: number;
  visibility: number;
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  wind: WindDataType;
}

interface WeatherDataType {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface CloudsDataType {
  all: number;
}

interface CoordDataType {
  lat: number;
  lon: number;
}

interface SystemDataType {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface WindDataType {
  deg: number;
  gust: number;
  speed: number;
}
