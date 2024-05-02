import SearchBarCounty from "../searchBar/SearchBarCounty";

function HeaderSection() {
  return (
    <div className=' m-8 mb-12 flex h-36 flex-col items-center justify-center 2xl:h-40'>
      <div className='mb-12'>
        <h1 className=' text-center text-5xl'>Time Zone</h1>
      </div>
      <SearchBarCounty />
    </div>
  );
}

export default HeaderSection;
