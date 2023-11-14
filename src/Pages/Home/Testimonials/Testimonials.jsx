import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {


    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setReviews(data);
        })
    }, []);
    // console.log(reviews);

    return (
        <section className="my-10">
            <SectionTitle
                subHeading="What Our Clients Say"
                heading="TESTIMONIALS"
            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review => <SwiperSlide key={review._id} review={review}>
                        <div className=" text-center space-y-5 flex flex-col items-center mx-8 md:m-24">
                            <Rating
                            style={{ maxWidth: 180 }}
                            value={review?.rating}
                            readOnly
                            />
                            <i className=' text-8xl bx bxs-quote-left'></i>
                            <p className="font-normal text-base">{review?.details}</p>
                            {/* <small>{review?.details}</small> */}
                            <h3 className="text-[#CD9003] font-medium text-2xl lg:text-3xl cinzel">{review?.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;