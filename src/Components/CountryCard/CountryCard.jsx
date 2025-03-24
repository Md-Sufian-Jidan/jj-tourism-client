import PropTypes from "prop-types";

const CountryCard = ({ country }) => {
    const { country_name, image, short_description } = country || {};
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        className="w-full h-52"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{country_name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#015551]">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CountryCard.propTypes = {
    country: PropTypes.node.isRequired,
}
export default CountryCard;