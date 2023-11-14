import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import { Link } from "react-router-dom";
import './Featured.css';

const Featured = () => {
    return (
        <div className=" my-10 featured_image text-white pb-[100px] pt-10">
            <SectionTitle 
                subHeading= "check it out"
                heading= "Featured Items"
            />
            <div className=" md:flex px-4 xl:px-[100px] justify-center items-center gap-4 md:gap-6 lg:gap-16">
                <div className="mt-10">
                    <img className=" mb-8 md:mb-0" src={featuredImg} alt="" />
                </div>
                <div className="space-y-1 mb-8 md:mb-0">
                    <p className="  text-xl lg:text-2xl font-normal">March 20, 2023</p>
                    <h3 className="  text-xl lg:text-2xl font-normal uppercase">WHERE CAN I GET SOME?</h3>
                    <p className="md:text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <Link>
                        <button className=" mt-10 btn btn-outline border-t-0 border-r-0 border-l-0 hover:bg-orange-500 hover:border-white text-white border-b-4 border-white">Read More <i className=' ml-2 bx bx-arrow-back'></i></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;