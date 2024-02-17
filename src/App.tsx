import { Route, Routes } from "react-router-dom";
import { TimeStampProvider } from "./context/dateTime/TimeStampProvider";
import { WeatherProvider } from "./context/weather/WeatherProvider";
import HomePage from "./pages/HomePage";
import DateTimeCountry from "./pages/DateTimeCountry";

function App() {
  return (
    <TimeStampProvider>
      <WeatherProvider>
        <Routes>
          <Route path="/" index element={<HomePage />} caseSensitive />
          <Route
            path="country/:countryPath"
            element={<DateTimeCountry />}
            caseSensitive
          />
        </Routes>
      </WeatherProvider>
    </TimeStampProvider>
  );
}

export default App;
