import SearchBarCounty from "./searchBar/SearchBarCounty";

function HeaderSection() {
  return (
    <div className=' m-4 mb-16 flex h-32 flex-col items-center justify-center 2xl:m-8 2xl:h-48'>
      <div className='mb-12'>
        <h1 className=' text-center text-5xl'>Time Zone</h1>
      </div>
      <SearchBarCounty />
    </div>
  );
}

export default HeaderSection;
