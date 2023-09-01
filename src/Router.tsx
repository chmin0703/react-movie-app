import { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomeContainer from './screens/HomeScreens';
import ScreenHeader from './components/header/ScreenHeader';

const Router : FC = (props) => {

    const location = useLocation();
    const {pathname} = location;
    return(
        <div>
            <ScreenHeader pathname={pathname} />
            <Routes>
                <Route path="/" Component={HomeContainer} />
            </Routes>
        </div>
    )
}

export default Router