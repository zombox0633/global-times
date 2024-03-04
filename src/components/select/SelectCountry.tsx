import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectOption from "./SelectOption";
import { GlobalTimeType, timezoneData } from "../../constraint/TIMEZONE_DATA";
import { formatForURL } from "../../helper/formatForURL";
import CountryTimezoneList from "./CountryTimezoneList";

function SelectCountry() {
  const navigate = useNavigate();
  const [showSelectItem, setShowSelectItem] = useState<boolean>(false);

  const filterHighlight = timezoneData.filter((item) => item.highlighted);
  const sortTimezoneData = filterHighlight.sort((a, b) => a.country.localeCompare(b.country));

  const handleChangeTimezone = (timezone: GlobalTimeType) => {
    const countryPath = formatForURL(timezone.country);
    navigate(`/country/${countryPath}`);
  };

  return (
    <div>
      <SelectOption showSelectItem={showSelectItem} setShowSelectItem={setShowSelectItem} />
      <CountryTimezoneList
        countryTimezoneData={{
          sortTimezoneData: sortTimezoneData,
          showSelectCountry: showSelectItem,
          handleChangeTimezone: handleChangeTimezone,
        }}
      />
    </div>
  );
}

export default SelectCountry;
