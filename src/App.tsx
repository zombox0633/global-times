import { Navigate, Route, Routes } from "react-router-dom";
import { PinProvider } from "./context/pin/PinProvider";
import { TimeStampProvider } from "./context/dateTime/TimeStampProvider";
import { WeatherProvider } from "./context/weather/WeatherProvider";
import HomePage from "./pages/HomePage";
import DateTimeCityPage from "./pages/DateTimeCityPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <PinProvider>
      <TimeStampProvider>
        <WeatherProvider>
          <Routes>
            <Route path='login' element={<LoginPage />} caseSensitive />
            <Route path='sign-up' element={<SignUpPage />} caseSensitive />
            <Route path='/' index element={<HomePage />} caseSensitive />
            <Route path='city' element={<Navigate to='city/thailand' replace />} />
            <Route path='city/:cityPath' element={<DateTimeCityPage />} caseSensitive />
            <Route path='*' index element={<ErrorPage />} caseSensitive />
          </Routes>
        </WeatherProvider>
      </TimeStampProvider>
    </PinProvider>
  );
}

export default App;
