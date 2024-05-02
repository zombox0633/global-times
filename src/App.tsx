import { Navigate, Route, Routes } from "react-router-dom";
import { PinProvider } from "./context/pin/PinProvider";
import { WeatherProvider } from "./context/weather/WeatherProvider";
import HomePage from "./pages/HomePage";
import DateTimeCityPage from "./pages/DateTimeCityPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <PinProvider>
      <WeatherProvider>
        <Routes>
          <Route path='/' index element={<HomePage />} caseSensitive />
          <Route path='country' element={<CountryPage />} caseSensitive />
          <Route path='city' element={<Navigate to='city/thailand' replace />} />
          <Route path='city/:cityPath' element={<DateTimeCityPage />} caseSensitive />
          <Route path='login' element={<LoginPage />} caseSensitive />
          <Route path='sign-up' element={<SignUpPage />} caseSensitive />
          <Route path='*' index element={<ErrorPage />} caseSensitive />
        </Routes>
      </WeatherProvider>
    </PinProvider>
  );
}

export default App;
