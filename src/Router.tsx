import { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomeContainer from './screens/HomeScreens';
import ScreenHeader from './components/header/ScreenHeader';
import MovieContainer from './screens/MovieScreens';
import DetailContainer from './screens/DetailScreens';

const Router : FC = (props) => {

    const location = useLocation();
    const {pathname} = location;
    return(
        <div>
            <ScreenHeader pathname={pathname} />
            <Routes>
                <Route path="/" Component={HomeContainer} />
                <Route path="/movie/*" Component={MovieContainer} />
                <Route path="/detail/:id" Component={DetailContainer}/>
            </Routes>
        </div>
    )
}

export default Router