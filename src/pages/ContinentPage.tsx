import { useParams } from "react-router-dom";
import HeaderSection from "../components/searchBar/HeaderSection";
import { capitalizeFirstLetter, formatForURL } from "../helper/formatForURL";
import useGetContinentDataByName from "../hook/globalTimeService/useGetContinentDataByName";
import ContinentGroup from "../components/continent/ContinentGroup";

function ContinentPage() {
  const { continentPath } = useParams();
  const formatContinent = (continentPath && formatForURL(continentPath)) ?? "";
  const continentUpperCase = continentPath ? capitalizeFirstLetter(continentPath) : "";

  const { sortedRegionNameGroup, error } = useGetContinentDataByName({
    continentName: formatContinent,
    page: 1,
    size: 120,
  });

  return (
    <div>
      <HeaderSection />
      <div className=' flex justify-center'>
        <div className='layout__content'>
          <div className=' my-6 mt-10 sm:my-6 lg:my-8'>
            <h2 className=' text-4xl sm:text-5xl lg:text-6xl'>
              Countries in the <span className=' text-[#F3A712]'>{continentUpperCase}</span>
            </h2>
          </div>
          {error ? (
            <div>
              <h3 className='text-red-500'>{error}</h3>
            </div>
          ) : (
            <div>
              {sortedRegionNameGroup.map(([region, item]) => (
                <ContinentGroup key={region} groupName={region} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContinentPage;
