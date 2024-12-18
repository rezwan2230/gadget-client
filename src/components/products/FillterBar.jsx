/* eslint-disable react/prop-types */
import { FiFilter } from "react-icons/fi";
import { RiResetRightLine } from "react-icons/ri";
const FillterBar = ({uniqueBrand, uniqueCategory, setBrand, setCategory, handleReset}) => {
  return (
    <div className="bg-gray-200 h-full p-4 rounded-t-md">
      <div className="flex items-center ga-1">
        <FiFilter size={24} />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>
      <div className=" mt-8 flex flex-col gap-3 items-center">
        <div className="w-full">
          <select onChange={(e)=>setBrand(e.target.value)} className=" p-2 w-full border border-black rounded">
           
            <option value="">Brands</option>
            {uniqueBrand.map((brand, index)=>(
              <option key={index} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <select onChange={(e)=>setCategory(e.target.value)}  className="w-full p-2 border border-black rounded">
            <option value="">Categories</option>
            {
              uniqueCategory.map((category, index)=>(
                <option key={index} value={category}>{category}</option>
              ))
            }
          </select>
        </div>
      </div>
      <button onClick={handleReset} className="btn btn-sm mt-4 w-full flex items-center justify-center">
        <p>reset</p> 
        <RiResetRightLine />
      </button>
    </div>
  );
};

export default FillterBar;
