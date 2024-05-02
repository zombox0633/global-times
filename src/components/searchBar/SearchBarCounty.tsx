import { useEffect, useState } from "react";
import { formatForURL } from "../../helper/formatForURL";
import { useNavigate } from "react-router-dom";
import SuggestionsListMemo from "./SuggestionsList";
import useGetCountryWithSearch from "../../hook/globalTimeService/useGetCountryWithSearch";

function SearchBarCounty() {
  const navigate = useNavigate();
  const [searchCounty, setSearchCounty] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [notFoundState, setNotFoundState] = useState<boolean>(false);

  const { data } = useGetCountryWithSearch({ countryName: debouncedSearch, page: 1, size: 4 });

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (searchCounty.trim()) {
        setDebouncedSearch(searchCounty);
      }
    }, 1000);

    return () => clearTimeout(searchTimeout);
  }, [searchCounty]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotFoundState(false);

    if (searchCounty) {
      const countryPath = formatForURL(searchCounty);
      navigate(`/country/${countryPath}`);
    } else {
      setNotFoundState(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='relative flex justify-center '>
      <label htmlFor='search_id'>
        <input
          type='search'
          id='search_id'
          value={searchCounty}
          onChange={(e) => setSearchCounty(e.target.value)}
          placeholder='Search for a county'
          aria-label='Search for a county'
          required
          className=' h-12 w-60 rounded-s-md border-2 border-white bg-night px-4 placeholder:text-white focus:outline-none sm:w-80'
        />
        {searchCounty && (
          <div className='absolute right-16 top-2 '>
            <button
              type='button'
              aria-label='Reset a country search.'
              onClick={() => setSearchCounty("")}
              className='material-symbols-outlined bg-night text-base'
            >
              close
            </button>
          </div>
        )}
      </label>
      <button
        type='submit'
        aria-label='Submit a country search.'
        className='material-symbols-outlined h-12 rounded-none rounded-e-md border-2 border-white bg-white text-2xl text-night'
      >
        search
      </button>
      <SuggestionsListMemo
        suggestions={data ? data.content : []}
        setSearchCounty={setSearchCounty}
      />
      {notFoundState && (
        <div className=' absolute bottom-12 right-1'>
          <p className='text-red-500'>County not found. Please try again.</p>
        </div>
      )}
    </form>
  );
}

export default SearchBarCounty;
