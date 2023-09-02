import React from 'react';
import PropsTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';

import styles from './Home.module.css';

interface HomeProps {
    movieDetail: any,
    loading: boolean;
    error : any;
}

const HomePresenter : React.FC<HomeProps> = ({
    movieDetail,
    loading,
    error
}) => {
    return loading? (
        <Loader></Loader>
    ) : (
        <div>홈</div>
    )
}

HomePresenter.propTypes = {
    movieDetail : PropsTypes.object,
    loading : PropsTypes.bool.isRequired
}

export default HomePresenter