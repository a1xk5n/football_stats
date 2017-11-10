import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';

import './page-header.scss';

export default class PageHeader extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: '',
    };

    render() {
        return (
            <div className="page-header">
                <h1 className="page-header__title">
                    {this.props.title}
                </h1>
                {this.props.children}
            </div>
        );
    }
}
