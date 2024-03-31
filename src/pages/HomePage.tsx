import HeaderSection from "../components/homePage/HeaderSection";
import TimeZoneGrid from "../components/homePage/TimeZoneGrid";
// import useGetInterestGroupData from "../hook/useGetInterestGroupData";

function HomePage() {
  // const {sortedInterestGroupData} = useGetInterestGroupData({page:1,size:12})
  // console.log(sortedInterestGroupData);

  return (
    <div className='relative flex h-dvh min-h-dvh flex-col justify-between overflow-x-hidden p-8 sm:pb-8'>
      <HeaderSection />
      <TimeZoneGrid />
      <div className='h-8 2xl:h-20' />
    </div>
  );
}

export default HomePage;
