import { useEffect, useState } from "react";
import UseUserData from "../../hooks/useUserData";
import axios from "axios";
import ProductCard from "../../components/shared/ProductCard";
import Loading from "../Loading";

const MyWishList = () => {
  const [wishlist, setWishList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [latestData, setLatestData] = useState(false);
  const userData = UseUserData();
  console.log(wishlist);

  const token = localStorage.getItem("access-token");

  useEffect(() => {
    setLoading(true);
    const fetchWishlist = async () => {
      await axios
        .get(`http://localhost:4000/wishlist/${userData._id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setWishList(res.data);
            setLoading(false);
          }
        });
    };
    if (userData?._id && token) {
      fetchWishlist();
    }
  }, [token, userData?._id, latestData]);

  return (
    <div>
      <div className="container mx-auto h-full">
        <h1 className="my-8 font-semibold text-center text-3xl">My Wishlist</h1>

        {/* content */}
        <div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-10  min-h-screen ">
              {loading ? (
                <Loading />
              ) : (
                <>
                  {wishlist?.length == 0 ? (
                    <div>
                      <p className="flex justify-center items-center min-h-[30ch] font-semibold text-4xl ">
                        No Products Found
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-6">
                      {wishlist.map((product) => (
                        <ProductCard
                          key={product._id}
                          product={product}
                          isInWishlist
                          setLatestData={setLatestData}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWishList;
