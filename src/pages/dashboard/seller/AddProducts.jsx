import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const sellerEmail = user.email;
    const title = data.title;
    const brand = data.brand;
    const price = parseInt(data.price);
    const stock = parseInt(data.stock);
    const category = data.category;
    const imageURL = data.image;
    const description = data.description;
    const productData = {
      sellerEmail,
      title,
      brand,
      price,
      stock,
      category,
      imageURL,
      description,
    };
    console.log(data);
    console.log(productData);
    const token = localStorage.getItem("access-token");
    axios
      .post("http://localhost:4000/add-products", productData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product successfully added!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Add Products</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* First ROW */}
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="product title"
                className="input input-bordered"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-500 font-light">
                  product title is required
                </span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder="product brand"
                className="input input-bordered"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <span className="text-red-500 font-light">
                  brand is required
                </span>
              )}
            </div>
          </div>

          {/* Second ROW */}
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="product price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.title && (
                <span className="text-red-500 font-light">
                  product price is required
                </span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                placeholder="stock quantity"
                className="input input-bordered"
                {...register("stock", { required: true })}
              />
              {errors.brand && (
                <span className="text-red-500 font-light">
                  stock is required
                </span>
              )}
            </div>
          </div>

          {/* Third ROW */}
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select 
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option value="mobileDevice">Mobile Devices</option>
                <option value="computingDevice">Computing Devices</option>
                <option value="audioGadget">Audio Gadgets</option>
                <option value="smartHomeDevive">Smart Home Devices</option>
                <option value="gamingGadget">Gaming Gadgets</option>
                <option value="wearableGadget">Wearable Gadgets</option>
                <option value="camera&Photography">Camera & Photography</option>
                <option value="carGadget">Car Gadgets</option>
                <option value="health&Fitness">Health & Fitness Gadgets</option>
                <option value="travelGadget">Travel Gadgets</option>
                <option value="kidGadget">{`Kids' Gadgets`}</option>
                
              </select>
              {errors.category && <p className="text-red-500 font-light">You must select a category</p>}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="product image"
                className="input input-bordered"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-500 font-light">
                  image is required
                </span>
              )}
            </div>
          </div>

          {/* Forth ROW */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="details..."
              className="input input-bordered h-32"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500 font-light">
                description is required
              </span>
            )}
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-outline bg-black text-white"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
