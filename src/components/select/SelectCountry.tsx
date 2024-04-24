import { useState } from "react";
import SelectOption from "./SelectOption";
import CountryTimezoneList from "./CountryTimezoneList";
import useGetInterestGroupData from "../../hook/globalTimeService/useGetInterestGroupData";

function SelectCountry() {
  const {sortInterestData} = useGetInterestGroupData({page:1,size:12})
  const [showSelectItem, setShowSelectItem] = useState<boolean>(false);

  return (
    <div>
      <SelectOption showSelectItem={showSelectItem} setShowSelectItem={setShowSelectItem} />
      <CountryTimezoneList
        countryTimezoneData={{
          sortTimezoneData: sortInterestData,
          showSelectCountry: showSelectItem,
        }}
      />
    </div>
  );
}

export default SelectCountry;
