import { GlobalTimeType } from "../../constraint/TIMEZONE_DATA";

type SuggestionsListPropsType = {
  suggestions: GlobalTimeType[];
  setSearchCounty: (value: React.SetStateAction<string>) => void;
};

function SuggestionsList({ suggestions, setSearchCounty }: SuggestionsListPropsType) {
  return (
    <ul className=' absolute right-8 top-[3.2rem] z-30 w-64 rounded-lg bg-white sm:right-12 sm:w-80'>
      {suggestions &&
        suggestions.map((suggestion) => (
          <li key={suggestion.country}>
            <button
              onClick={() => setSearchCounty(suggestion.country)}
              className=' w-full bg-white pl-4 text-start text-lg text-night hover:border-night'
            >
              {suggestion.country}
            </button>
          </li>
        ))}
    </ul>
  );
}

export default SuggestionsList;
