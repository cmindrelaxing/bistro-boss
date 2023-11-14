import PropTypes from 'prop-types';

const MenuItem = ({item}) => {
    // console.log(item);
    const {name, price, image, recipe} = item || {};


    return (
        <div className='md:flex mb-8 md:mb-5 lg:mb-3'>
            <img className=' mb-5 md:mb-0 mr-8 w-[118px] h-[104px] rounded-tr-full rounded-br-full rounded-bl-full' src={image} alt="" />
            <div className='space-y-2'>
                <h3 className='font-normal text-base lg:text-lg xl:text-xl text-[#151515] uppercase'>{name}------------------</h3>
                <p className='font-normal text-base text-[#737373]'>{recipe}</p>
            </div>
            <p className=' mt-5 md:mt-0 flex font-normal text-[#BB8506] text-xl'><span>$</span> {price}</p>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object
};

export default MenuItem;