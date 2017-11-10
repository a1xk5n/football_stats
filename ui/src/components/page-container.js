import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

import { routeConstants } from '../constants/main-constants';

import './page-container.scss';

export default class PageContainer extends PureComponent {
    static propTypes = {
        children: PropTypes.element,
        selectedPage: PropTypes.string,
    };

    getPageLinks = () => {
        const links = routeConstants.filter(link => link.isHeaderTab);

        return links.map((link, index) => {
            const pathname = link.defaultUrlHash;
            const classes = classnames('header__link', {
                'header__link--selected': this.props.selectedPage === link.page,
            });

            return (
                <Link to={{ pathname }} key={index} className={classes}>
                    {link.name}
                </Link>
            );
        });
    };

    render() {
        return (
            <div className='page-container'>
                <div className='page-wrapper'>
                    <AppBar title='Football Stats' className='header'>
                        <Navigation type='horizontal' className='header__nav'>
                            {this.getPageLinks()}
                        </Navigation>
                    </AppBar>
                    <div className='content-container'>{this.props.children}</div>
                </div>
            </div>
        );
    }
}
