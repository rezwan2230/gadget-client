import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-16">
        <h1 className="text-center mb-16 text-4xl font-semibold">Featured Product</h1>
        <FeaturedProducts />
      </div>
      <div className="my-16">
        <h1 className="text-center mb-16 text-4xl font-semibold">User Review</h1>
        <UserReview/>
      </div>
      <div className="my-16">
        <h1 className="text-center mb-16 text-4xl font-semibold">Frequently asked questions</h1>
        <Accordion/>
      </div>
    </div>
  );
};

export default Home;
