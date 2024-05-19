import SearchBarCounty from "../searchBar/SearchBarCounty";

function HeaderSection() {
  return (
    <div className=' m-8 mb-12 flex h-36 flex-col items-center justify-center 2xl:h-40'>
      <div className='mb-6'>
        <h1 className='text-center font-BebasNeue text-5xl'>TimeZone</h1>
      </div>
      <SearchBarCounty />
    </div>
  );
}

export default HeaderSection;
