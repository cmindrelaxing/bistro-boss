import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBossIntro from "../BistroBossIntro/BistroBossIntro";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommeds from "../ChefRecommeds/ChefRecommeds";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBossIntro></BistroBossIntro>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommeds></ChefRecommeds>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;