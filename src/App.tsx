import { Route, Routes } from "react-router-dom";
import { TimeStampProvider } from "./context/TimeStampProvider";
import HomePage from "./pages/HomePage";
import DateTimeCountry from "./pages/DateTimeCountry";

function App() {
  return (
    <TimeStampProvider>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route
          path="country/:countryPath"
          element={<DateTimeCountry />}
          caseSensitive
        />
      </Routes>
    </TimeStampProvider>
  );
}

export default App;
