
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Footer/Footer';
import Sponcer from '../Page/Sponcer/Sponcer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            
            <Outlet></Outlet>
            <Sponcer></Sponcer>
            <Footer></Footer>
        </div>
    );
};

export default Root;