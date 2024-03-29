import { Navigate, Route, Routes } from "react-router-dom";
import { PinProvider } from "./context/pin/PinProvider";
import { TimeStampProvider } from "./context/dateTime/TimeStampProvider";
import { WeatherProvider } from "./context/weather/WeatherProvider";
import HomePage from "./pages/HomePage";
import DateTimeCountryPage from "./pages/DateTimeCountryPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <PinProvider>
      <TimeStampProvider>
        <WeatherProvider>
          <Routes>
            <Route path='/' index element={<HomePage />} caseSensitive />
            <Route path='country' element={<Navigate to='country/thailand' replace />} />
            <Route path='country/:countryPath' element={<DateTimeCountryPage />} caseSensitive />
            <Route path='*' index element={<ErrorPage />} caseSensitive />
          </Routes>
        </WeatherProvider>
      </TimeStampProvider>
    </PinProvider>
  );
}

export default App;
