import ProductCard from "../shared/productCard";

const FeaturedProducts = () => {
    return (
        <div className="lg:flex items-center justify-between gap-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};

export default FeaturedProducts;