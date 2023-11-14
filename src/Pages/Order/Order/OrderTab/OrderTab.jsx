import FoodCard from "../../../../components/SectionTitle/FoodCard/FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className="px-2 md:px-3 lg:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            {
                items?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
            </div>
        </div>
    );
};

OrderTab.propTypes = {
    items: PropTypes.array,
};

export default OrderTab;