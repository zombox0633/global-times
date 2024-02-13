import { Route, Routes } from "react-router-dom";
import { TimeStampProvider } from "./context/TimeStampProvider";
import HomePage from "./pages/HomePage";
import DateTimeCountry from "./pages/DateTimeCountry";
import Layout from "./components/Layout";

function App() {
  return (
    <TimeStampProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="country/*" element={<DateTimeCountry />} caseSensitive />
        </Route>
      </Routes>
    </TimeStampProvider>
  );
}

export default App;
