import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { onStartApp } from '../actions/main-actions';

import Main from '../components/main';

const mapStateToProps = state => {
    return {
        isReady: state.get('MainReducer').get('isReady'),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStartApp: () => {
            dispatch(onStartApp());
        },
    };
};

const MainContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default MainContainer;
