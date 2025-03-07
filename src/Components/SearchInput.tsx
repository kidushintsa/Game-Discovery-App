import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
  return (
    <div className=" border-slate-500 rounded-full flex !bg-slate-700 h-1/2 self-center w-1/2 mx-auto px-2">
    <BsSearch color="white" size={24} style={{stroke:"white",strokeWidth:1, alignSelf:"center"}}/>
    <input type="search" placeholder='Search...' className="rounded-full h-1/2 self-center w-full !bg-slate-700 focus:!border-none focus:ring-0 border-none"/>
    </div>
  )
}

export default SearchInput