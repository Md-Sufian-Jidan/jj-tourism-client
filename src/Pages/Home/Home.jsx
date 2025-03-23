import { Helmet } from 'react-helmet';
import Banner from '../../Components/Banner/Banner';
import TouristSpots from '../../Components/TouristSpots/TouristSpots';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Jj Tourism || Home</title>
            </Helmet>
            <Banner />
            <TouristSpots />
        </div>
    );
};

export default Home;