import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

type DropdownPropsType = {
  label: string;
  data: string[];
};

function Dropdown({ label, data }: DropdownPropsType) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef}>
      <button
        type='button'
        aria-expanded={showDropdown}
        aria-controls={`dropdown-${label}`}
        onClick={() => setShowDropdown((prev) => !prev)}
        className='navlink__style h-12 border-0 bg-transparent px-2 py-1 font-BebasNeue text-lg 
        hover:bg-black/20 sm:text-2xl md:px-4 md:text-[30px]'
      >
        {label}
      </button>
      {/* {showDropdown && (
        <div
          onClick={() => setShowDropdown(false)}
          className=' absolute inset-0 -z-10 h-dvh bg-black/10'
        />
      )} */}
      {showDropdown && (
        <div className='relative'>
          <ul className=' absolute left-0 top-5 rounded-md bg-[#212121] py-2  drop-shadow-lg md:left-1'>
            {data.map((item, index) => (
              <li key={index} className='my-1 hover:bg-white/10 '>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setShowDropdown(false)}
                  className='pl-6 pr-12 font-BebasNeue text-lg md:text-xl lg:text-2xl'
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
