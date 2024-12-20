import axios from "axios";
import UseUserData from "../../hooks/useUserData";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ProductCard = ({ product, isInWishlist, setLatestData}) => {
  // const { title, brand, category, price, description, stock, imageURL } =product;

  const userData = UseUserData();
  const userEmail = userData?.email;
  const data = { userEmail, productId: product._id };
  const token = localStorage.getItem("access-token");

  const handleWishList = async () => {
    await axios
      .patch("http://localhost:4000/wishlist/add", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added to your wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleRemoveFromWishList = async () => {
    await axios
      .patch("http://localhost:4000/wishlist/remove", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product remove from your wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
          setLatestData(prev=>!prev)
        }
      });
  };

  return (
    <div className="rounded-md border-1 shadow">
      <figure>
        <img
          height={30}
          className="w-full h-60 object-cover rounded-t"
          src={product?.imageURL}
        />
      </figure>
      <div className="p-2">
        <h2 className="text-xl font-bold overflow-hidden">{product?.title}</h2>

        <h2 className="text-lg font-semibold">{product?.brand}</h2>
        <h2 className="text-md ">
          Price: $<span className="text-red-600">{product?.price}</span>
        </h2>
        <h2 className="text-md">
          In Stock: <span className="text-red-600">{product?.stock}</span>
        </h2>
        <h2 className="text-md font-semibold">{product?.category}</h2>
        <p className="text-xs mt-2">
          {product?.description.length > 50
            ? `${product?.description.slice(0, 50)}....`
            : `${product?.description}`}
        </p>
        {isInWishlist ? (
          <div className="mt-4">
            <button
              onClick={handleRemoveFromWishList}
              className="btn btn-sm bg-red-500 text-white w-full"
            >
              Remove from wishlist
            </button>
          </div>
        ) : (
          <>
            <div className="mt-4">
              <button
                onClick={handleWishList}
                className="btn btn-sm btn-primary w-full"
              >
                Add to wishlist
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
