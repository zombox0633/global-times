import { Route, Routes } from "react-router-dom";
import { TimeStampProvider } from "./context/dateTime/TimeStampProvider";
import { WeatherProvider } from "./context/weather/WeatherProvider";
import HomePage from "./pages/HomePage";
import DateTimeCountryPage from "./pages/DateTimeCountryPage";

function App() {
  return (
    <TimeStampProvider>
      <WeatherProvider>
        <Routes>
          <Route path="/" index element={<HomePage />} caseSensitive />
          <Route
            path="country/:countryPath"
            element={<DateTimeCountryPage />}
            caseSensitive
          />
        </Routes>
      </WeatherProvider>
    </TimeStampProvider>
  );
}

export default App;
