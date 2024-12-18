/* eslint-disable react/prop-types */


const SortByPrice = ({setSort}) => {
  return (
    <select onChange={(e)=>setSort(e.target.value)} className=" max-w-md p-2 border border-black rounded">
      <option value='asc'>Low to high</option>
      <option value='desc'>High to low</option>
    </select>
    
  );
};

export default SortByPrice;
