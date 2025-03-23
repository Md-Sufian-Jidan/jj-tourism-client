import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TouristSpot = ({ spot }) => {
    const { _id, Country, image, short_description, tourists_spot_name } = spot || {}
    // console.log(spot);
    return (
        <div className="card shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Picture not available"
                    className="rounded-xl h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Country: {Country}</h2>
                <h3>Tourist spot Name: <span className="font-bold">{tourists_spot_name}</span></h3>
                <p>{short_description}</p>
                <div className="card-actions">
                    <Link to={`/spot/${_id}`} className="btn bg-[#C1D8C3]">View Details</Link>
                </div>
            </div>
        </div>
    );
};

TouristSpot.propTypes = {
    spot: PropTypes.node.isRequired,
}
export default TouristSpot;