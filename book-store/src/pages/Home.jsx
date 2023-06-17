import Layout from "../components/Layout";
import hero_img from "../assets/images/banner.png";

const Home = () => {
    return (
        <Layout>
            <div className="hero py-32 bg-gray-700">
                <div className="hero-content grid md:grid-cols-2 gap-8">
                    <div className="order-2">
                        <img src={hero_img} className="" alt="Hero" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold leading-normal text-white">
                            Welcome to Cynthia Online Book Store
                        </h1>
                        <p className="py-6 text-gray-300">
                            With us, you can shop online & help save your street
                            at the same time. If you're looking for great value
                            second-hand books, then World of Books is the place
                            for you. As you may already know, we aren't like
                            other online bookstores.
                        </p>
                        <button className="btn btn-primary mt-4">
                            Explore Books
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Home;
