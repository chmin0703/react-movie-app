import React from 'react';
import PropsTypes from 'prop-types';

interface HomeProps {
    movieDetail: any,
    loading: boolean;
}

const HomePresenter : React.FC<HomeProps> = ({
movieDetail,
loading
}) => {
    return(
        <div>홈</div>
    )
}

HomePresenter.propTypes = {
    movieDetail : PropsTypes.object,
    loading : PropsTypes.bool.isRequired
}

export default HomePresenter