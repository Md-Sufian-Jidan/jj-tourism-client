import PropTypes from "prop-types";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const TouristSpot = ({ spot }) => {
    const { _id, Country, image, average_cost, totalVisitorsPerYear, travel_time, seasonality, tourists_spot_name } = spot || {}
    // console.log(spot);
    return (
        <Zoom duration={4000}>
            <div className="card shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Picture not available"
                        className="rounded-xl h-52" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Country : {Country}</h2>
                    <h3>Tourist spot Name : <span className="font-bold">{tourists_spot_name}</span></h3>
                    <div className="flex items-center justify-between">
                        <p>Average Cost : <span className="font-bold">{average_cost}</span></p>
                        <p>Total Visitors Per Year : <span className="font-bold">{totalVisitorsPerYear}</span></p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Travel Time : <span className="font-bold">{travel_time}</span></p>
                        <p>Seasonality : <span className="font-bold">{seasonality}</span></p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/spot/${_id}`} className="btn bg-[#C1D8C3]">View Details</Link>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

TouristSpot.propTypes = {
    spot: PropTypes.node.isRequired,
}
export default TouristSpot;