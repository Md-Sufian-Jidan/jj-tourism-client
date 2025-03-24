import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { Helmet } from 'react-helmet';

const Main = () => {
    return (
        <>
            <Helmet>
                <title>Jj Tourism || Home</title>
            </Helmet>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <div className='min-h-[calc(100vh-395px)]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Main;