import { useState } from "react";
import FillterBar from "../components/products/FillterBar";
import SearchBar from "../components/shared/SearchBar";
import SortByPrice from "../components/shared/SortByPrice";
import { useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/shared/ProductCard";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios
        .get(
          `http://localhost:4000/all-products?title=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          setProducts(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categories);
          setTotalPages(Math.ceil(res.data.totalProducts / 9));
          setLoading(false);
        });
    };
    fetch();
  }, [search, sort, brand, category, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };
  const handleReset = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto h-full">
      <h1 className="my-8 font-semibold text-center text-3xl">All Products</h1>

      {/* serch and sort */}
      <div className="flex justify-between items-center w-full mb-6">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>

      {/* content */}
      <div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-2  min-h-screen ">
            <FillterBar
              uniqueBrand={uniqueBrand}
              uniqueCategory={uniqueCategory}
              setBrand={setBrand}
              setCategory={setCategory}
              handleReset={handleReset}
            />
          </div>
          <div className="col-span-10  min-h-screen">
            {loading ? (
              <Loading />
            ) : (
              <>
                {products?.length == 0 ? (
                  <div>
                    <p className="flex justify-center items-center min-h-[30ch] font-semibold text-4xl ">
                      No Products Found
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-6">
                    {products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                )}
                <div className="flex justify-center gap-5 p-8">
                  <button disabled={page==1}
                    className="btn p-4 rounded-full"
                    onClick={() => handlePageChange(page - 1)}
                  >
                    <FaRegArrowAltCircleLeft />
                  </button>
                  <p>
                    page {page} of {totalPages}
                  </p>
                  <button
                    disabled={page == totalPages}
                    className="btn p-4 rounded-full"
                    onClick={() => handlePageChange(page + 1)}
                  >
                    <FaRegArrowAltCircleRight />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* pagination */}
    </div>
  );
};

export default Products;
