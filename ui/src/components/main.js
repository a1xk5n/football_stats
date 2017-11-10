import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import PropTypes from 'prop-types';

import { routeConstants, Pages, defaultPage } from '../constants/main-constants';

import PageContainer from './page-container';

export default class Main extends PureComponent {
    static propTypes = {
        isReady: PropTypes.bool,
        onStartApp: PropTypes.func,
    };

    componentWillMount() {
        this.props.onStartApp();
    }
    getRoutes = () => {
        const routes = [];
        const DefaultItem = routeConstants.find(route => route.page === defaultPage);
        const DefaultComponent = DefaultItem.component;
        const defaultPageName = DefaultItem.page;

        const progressBar = <ProgressBar className='main-progress-bar' mode='indeterminate' />;

        routes.push(
            <Route
                exact
                key={0}
                path='/'
                render={props => (
                    <PageContainer selectedPage={defaultPageName}>
                        {this.props.isReady ? <DefaultComponent {...props} /> : progressBar}
                    </PageContainer>
                )}
            />,
        );

        routeConstants.forEach((route, index) => {
            const moduleUrlHash = route.defaultUrlHash;

            const Constructor = route.component;

            routes.push(
                <Route
                    key={index + 1}
                    path={moduleUrlHash}
                    render={props => (
                        <PageContainer selectedPage={route.page}>
                            {this.props.isReady ? <Constructor {...props} /> : progressBar}
                        </PageContainer>
                    )}
                />,
            );
        });

        routes.push(<Route key={routes.length} path='/*' render={() => <Redirect to='/' />} />);

        return routes;
    };

    render() {
        const routes = this.getRoutes();

        const content = <Switch>{routes}</Switch>;

        return content;
    }
}
