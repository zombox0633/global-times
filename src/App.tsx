import { Navigate, Route, Routes } from "react-router-dom";
import { PinProvider } from "./context/pin/PinProvider";
import { WeatherProvider } from "./context/weather/WeatherProvider";
import HomePage from "./pages/HomePage";
import DateTimeCityPage from "./pages/DateTimeCityPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";
import CountryPage from "./pages/CountryPage";
import Layout from "./components/Layout";
import ContinentPage from "./pages/ContinentPage";
import useRegisterWithSecret from "./hook/user/useRegisterWithSecret";
import UniversalLoader from "./components/loader/UniversalLoader";

function App() {
  useRegisterWithSecret();

  return (
    <UniversalLoader>
      <PinProvider>
        <WeatherProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} caseSensitive />
              <Route path='continent' element={<Navigate to='continent/america' replace />} />
              <Route path='continent/:continentPath' element={<ContinentPage />} caseSensitive />
              <Route path='country' element={<Navigate to='country/united_states' replace />} />
              <Route path='country/:countryPath' element={<CountryPage />} caseSensitive />
              <Route path='city' element={<Navigate to='city/new_york' replace />} />
              <Route path='city/:cityPath' element={<DateTimeCityPage />} caseSensitive />
            </Route>
            <Route path='login' element={<LoginPage />} caseSensitive />
            <Route path='sign-up' element={<SignUpPage />} caseSensitive />
            <Route path='*' index element={<ErrorPage />} caseSensitive />
          </Routes>
        </WeatherProvider>
      </PinProvider>
    </UniversalLoader>
  );
}

export default App;
