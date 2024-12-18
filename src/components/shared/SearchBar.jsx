/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";

const SearchBar = ({handleSearch}) => {
  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center gap-1">
        <input
          className="max-w-md p-2 border border-black rounded-l-lg"
          type="text"
          name="search"
          id=""
          placeholder="search products"
        />
        <button className=" bg-slate-100 border border-black px-3 py-2 rounded-r-lg ">
          <IoSearch className="size-6 text-black"/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

