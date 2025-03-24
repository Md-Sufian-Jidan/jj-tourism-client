import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
    const { country_name, image, short_description } = country || {};
    return (
        <div>
            <div className="card bg-[#255F38] h-96 shadow-sm">
                <figure>
                    <img
                        className="w-full h-48"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{country_name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/country/${country_name}`}>
                            <button className="btn bg-[#015551]">visit Places</button>
                        </Link>
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