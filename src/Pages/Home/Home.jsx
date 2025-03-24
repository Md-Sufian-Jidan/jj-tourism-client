import { Helmet } from 'react-helmet';
import Banner from '../../Components/Banner/Banner';
import TouristSpots from '../../Components/TouristSpots/TouristSpots';
import Faq from '../../Components/Faq/Faq';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Jj Tourism || Home</title>
            </Helmet>
            <Banner />
            <TouristSpots />
            <Faq />
        </div>
    );
};

export default Home;