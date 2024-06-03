import { GroupPropsType } from "../../hook/useGroupedData";
import { GetContinentDataType } from "../../service/continent/getContinentDataByName.type";
import CustomLink from "../CustomLink";

function ContinentGroup({ groupName, item }: GroupPropsType<GetContinentDataType>) {
  return (
    <div className='mb-12 rounded-xl bg-black/15 px-4 pb-8 pt-4 shadow-md sm:px-8 '>
      <div className='mb-8'>
        <h3 className='leading-relaxed text-[#A7C957]'>{groupName} Region</h3>
      </div>
      <div className='layout__content grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:px-2 xl:grid-cols-5'>
        {item.map((data) => (
          <CustomLink key={data.country_id} path='country' linkName={data.country_name} />
        ))}
      </div>
    </div>
  );
}

export default ContinentGroup;
