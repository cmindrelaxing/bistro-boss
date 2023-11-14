import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodCard = ({item}) => {

    const {name, price, image, recipe, category} = item || {};

    return (
        <div>
            <div className='relative'>
                <div className='relative'>
                    <img className=" rounded-tl-lg rounded-tr-lg  w-full h-[230px] md:h-[300px]" src={image} alt="" />
                    <h4 className=" absolute cinzel rounded-lg bg-black py-1 px-3 bottom-5 left-5 text-white font-semibold capitalize">{category}</h4>
                </div>
                <div className=" rounded-bl-lg rounded-br-lg space-y-4 bg-[#F3F3F3] p-4 md:p-8 text-center">
                    <div className="space-y-2 text-[#151515] font-normal">
                    <h4 className="text-[#151515] text-lg font-semibold cinzel">{name}</h4>
                    <p>{
                        recipe.length > 60 
                        ? 
                        <>{recipe.slice(0, 60)}...
                        <Link className='text-blue-600'> <small className='font-bold'>Read more</small></Link>
                        </>
                        : 
                        recipe
                    }
                    </p>
                    </div>
                    <h4 className=" absolute rounded-lg bg-black py-1 px-3 top-2 right-6 text-[#fff] font-semibold">$ {price}</h4>
                    <button className=" btn btn-outline border-t-0 border-r-0 border-l-0 hover:bg-black hover:border-orange-500 text-orange-500 border-b-4 border-black">add to cart <i className=' ml-2 bx bx-arrow-back'></i></button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object
};

export default FoodCard;