import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center w-11/12 md:w-6/12 lg:w-4/12 my-8'>
            <p className="text-[#D99904] text-base md:text-lg lg:text-xl italic mb-3 font-normal">--- {subHeading} ---</p>
            <h3 className="  font-normal text-2xl md:text-3xl lg:text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
};

export default SectionTitle;