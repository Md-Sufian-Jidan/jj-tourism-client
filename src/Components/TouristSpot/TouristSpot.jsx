import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TouristSpot = ({ spot }) => {
    const { _id, Country, average_cost, image, location, seasonality, short_description } = spot || {}
    console.log(spot);
    return (
        <div className="card shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Picture not available"
                    className="rounded-xl h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Country: {Country}</h2>
                <p>{short_description}</p>
                <div className="card-actions">
                    <Link to={`/spot/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

TouristSpot.propTypes = {
    spot: PropTypes.node.isRequired,
}
export default TouristSpot;