import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useQueryStore from "../State-management/useQueryStore";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useQueryStore(s => s.setSearchText)//only rerender when the search text is changed
  return (
    <form
      className=" border-slate-500 rounded-full flex !bg-slate-700 h-1/2 self-center w-1/2 mx-auto px-2"
      onSubmit={(e) => {
        e.preventDefault();
        if(ref.current) setSearchText(ref.current?.value);
      }}
    >
      <BsSearch
        color="white"
        size={24}
        style={{ stroke: "white", strokeWidth: 1, alignSelf: "center" }}
      />
      <input
        ref={ref}
        type="search"
        placeholder="Search..."
        className="rounded-full h-1/2 self-center w-full !bg-slate-700 focus:!border-none focus:ring-0 border-none caret-white text-white"
      />
    </form>
  );
};

export default SearchInput;
