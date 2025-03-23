import { Helmet } from 'react-helmet';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Jj Tourism || Home</title>
            </Helmet>
            <Banner />
        </div>
    );
};

export default Home;