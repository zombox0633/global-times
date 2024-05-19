import { NavLink } from "react-router-dom";
import { GlobalTimeDataType } from "../../service/GlobalTimeService.type";
import { formatForURL } from "../../helper/formatForURL";

export type CityLinkPropType = {
  item: GlobalTimeDataType;
};

function CityLink({ item }: CityLinkPropType) {
  const cityPath = formatForURL(item.city_name);
  const path = `/city/${cityPath}`;

  return (
    <div>
      <NavLink
        to={path}
        aria-label={`View details of the time period and related information of ${cityPath}`}
        className='navlink__style flex max-h-32 min-h-12 items-center justify-center 
        hover:bg-eerieBlack/100 sm:max-w-36 lg:max-w-40'
      >
        <p className=' text-xl'>{item.city_name}</p>
      </NavLink>
    </div>
  );
}

export default CityLink;
