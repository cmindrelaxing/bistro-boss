import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            { title && <Cover img={img} title={title}></Cover>}
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 md:px-5 xl:px-0 my-16">
                {
                    // eslint-disable-next-line react/prop-types
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            {
                items?.offered
                ? 
                <Link to="/order/salad"></Link>
                :
                <div className="text-center mb-10">
                    <Link to={`/order/${title}`}>
                    <button className=" btn btn-outline border-t-0 border-r-0 border-l-0 hover:bg-black hover:border-orange-500 text-orange-500 border-b-4 border-black">add to cart <i className=' ml-2 bx bx-arrow-back'></i></button>
                    </Link> 
                </div>
            }
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string,
    img: PropTypes.string,
};

export default MenuCategory;