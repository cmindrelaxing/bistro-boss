import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// images imported from 
import img1 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"

const ChefRecommeds = () => {
    return (
        <div>
            <SectionTitle 
                heading="CHEF RECOMMENDS"
                subHeading="Should Try"
            />
            <div className=" px-2 md:px-3 lg:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <img className=" rounded-tl-lg rounded-tr-lg  w-full h-[230px] md:h-[300px]" src={img1} alt="" />
                    <div className=" rounded-bl-lg rounded-br-lg space-y-4 bg-[#F3F3F3] p-4 md:p-8 text-center">
                        <div className="space-y-2 text-[#151515] font-normal">
                        <h4 className="text-[#151515] text-xl lg:text-2xl font-semibold">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                        <button className=" btn btn-outline border-t-0 border-r-0 border-l-0 hover:bg-black hover:border-orange-500 text-orange-500 border-b-4 border-black">add to cart <i className=' ml-2 bx bx-arrow-back'></i></button>
                    </div>
                </div>
                <div>
                    <img className=" rounded-tl-lg rounded-tr-lg  w-full h-[230px]  md:h-[300px]" src={img3} alt="" />
                    <div className=" rounded-bl-lg rounded-br-lg space-y-4 bg-[#F3F3F3] p-4 md:p-8 text-center">
                        <div className="space-y-2 text-[#151515] font-normal">
                        <h4 className="text-[#151515] text-xl lg:text-2xl font-semibold">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                        <button className=" btn btn-outline border-t-0 border-r-0 border-l-0 hover:bg-black hover:border-orange-500 text-orange-500 border-b-4 border-black">add to cart <i className=' ml-2 bx bx-arrow-back'></i></button>
                    </div>
                </div>
                <div>
                    <img className=" rounded-tl-lg rounded-tr-lg  w-full h-[230px]  md:h-[300px]" src={img4} alt="" />
                    <div className=" rounded-bl-lg rounded-br-lg space-y-4 bg-[#F3F3F3] p-4 md:p-8 text-center">
                        <div className="space-y-2 text-[#151515] font-normal">
                        <h4 className="text-[#151515] text-xl lg:text-2xl font-semibold">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                        <button className=" btn btn-outline border-t-0 border-r-0 border-l-0 hover:bg-black hover:border-orange-500 text-orange-500 border-b-4 border-black bg-white">add to cart <i className=' ml-2 bx bx-arrow-back'></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommeds;