import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <section>
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div className=" bg-[#1F2937] text-white">
                        <div className=" h-[100%] py-20 space-y-2 text-center md:text-start md:pl-10 lg:w-[375px]  lg:float-right  lg:text-center  lg:mr-20">
                            <h3 className=" font-medium text-lg md:text-2xl lg:text-3xl">CONTACT US</h3>
                            <p className=" font-medium text-base "> <span>123 ABS Street, Uni 21, Banglades h</span> </p>
                            <p className=" font-medium text-base "> <span>+88 12345678 9</span> </p>
                            <p className=" font-medium text-base "> <span>Mon - Fri: 08:00 - 22:00</span> </p>
                            <p className=" font-medium text-base "> <span>Sat - Sun: 10:00 - 23:00</span> </p>
                        </div>
                    </div>
                    <div className=" bg-[#111827] text-white">
                        <div className=" h-[100%] py-20 space-y-2 text-center md:text-start md:pl-10 lg:w-[375px]  lg:float-left  lg:text-center  lg:mr-20">
                            <h3 className=" font-medium text-lg md:text-2xl lg:text-3xl">Follow US</h3>
                            <p className="font-medium text-base ">Join us on social media</p>
                            <div className="">
                                <Link><i className=' hover:text-yellow-400 cursor-pointer mr-2 ml-2 text-2xl bx bxl-facebook'></i></Link>
                                <Link><i className=' hover:text-yellow-400 cursor-pointer mr-2 ml-2 text-2xl bx bxl-instagram' ></i></Link>
                                <Link><i className=' hover:text-yellow-400 cursor-pointer mr-2 ml-2 text-2xl bx bxl-twitter' ></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-[#151515] text-center py-4">
                <small className="text-white">Copyright &copy; CulinaryCloud. All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;