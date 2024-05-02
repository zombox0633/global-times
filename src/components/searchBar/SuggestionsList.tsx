import { memo } from "react";
import { GetCountryWithSearchDataType } from "../../service/country/getCountryWithSearch.type";

type SuggestionsListPropsType = {
  suggestions: GetCountryWithSearchDataType[] | [];
  setSearchCounty: (value: React.SetStateAction<string>) => void;
};

function SuggestionsList({ suggestions, setSearchCounty }: SuggestionsListPropsType) {
  return (
    <ul className=' absolute right-8 top-[3.2rem] z-30 w-64 rounded-lg bg-white sm:right-12 sm:w-80'>
      {suggestions &&
        suggestions.map((suggestion) => (
          <li key={suggestion.name}>
            <button
              aria-label={`Select ${suggestion.name}`}
              onClick={() => setSearchCounty(suggestion.name)}
              className=' w-full bg-white pl-4 text-start text-lg text-night hover:border-night'
            >
              {suggestion.name}
            </button>
          </li>
        ))}
    </ul>
  );
}

const SuggestionsListMemo = memo(SuggestionsList);

export default SuggestionsListMemo;
