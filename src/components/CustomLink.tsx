import { NavLink } from "react-router-dom";
import { formatForURL } from "../helper/formatForURL";

export type CustomLinkPropType = {
  path: string;
  linkName: string;
};

function CustomLink({ path, linkName }: CustomLinkPropType) {
  const formattedLinkName = formatForURL(linkName);
  const fullPath = `/${path}/${formattedLinkName}`;

  return (
    <div>
      <NavLink
        to={fullPath}
        aria-label={`View details of the time period and related information of ${formattedLinkName}`}
        className='navlink__style flex max-h-36 min-h-12 w-28 items-center 
        justify-center hover:bg-eerieBlack/100 sm:max-w-36 lg:max-w-40 xl:max-w-44'
      >
        <p className=' text-center text-xl'>{linkName}</p>
      </NavLink>
    </div>
  );
}

export default CustomLink;
