import React from 'react';
import PropsTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';

interface HomeProps {
    movieDetail: any,
    loading: boolean;
}

const HomePresenter : React.FC<HomeProps> = ({
movieDetail,
loading
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