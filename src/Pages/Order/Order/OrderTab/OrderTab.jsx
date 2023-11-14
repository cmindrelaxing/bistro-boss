import FoodCard from "../../../../components/SectionTitle/FoodCard/FoodCard";
import PropTypes from 'prop-types';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({items}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    
    return (
        <div>
            <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="px-2 md:px-3 lg:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                    {
                        items?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

OrderTab.propTypes = {
    items: PropTypes.array,
};

export default OrderTab;