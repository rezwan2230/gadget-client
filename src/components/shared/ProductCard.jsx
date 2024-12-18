/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  // const { title, brand, category, price, description, stock, imageURL } =
  product;
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
        <div className="mt-4">
          <button className="btn btn-sm btn-primary w-full">
            add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 
