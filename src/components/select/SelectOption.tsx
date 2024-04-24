import clsx from "clsx";

type SelectOptionPropsType = {
  showSelectItem: boolean;
  setShowSelectItem: React.Dispatch<React.SetStateAction<boolean>>;
};

function SelectOption({ showSelectItem, setShowSelectItem }: SelectOptionPropsType) {
  return (
    <div>
      <button
        type='button'
        aria-label='Toggle time zone selection'
        onClick={() => setShowSelectItem((prev) => !prev)}
        className='focus__df relative z-[60] flex w-40 items-center justify-center bg-night pl-4'
      >
        Timezone
        <span
          className={clsx("material-symbols-outlined my-1 ml-1", {
            " rotate-0": showSelectItem,
            "rotate-180": !showSelectItem,
          })}
        >
          expand_more
        </span>
      </button>
    </div>
  );
}

export default SelectOption;
